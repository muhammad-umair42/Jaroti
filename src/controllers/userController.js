import { User } from '../models/userModel.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { generateToken } from '../utils/Tokens.js';
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from '../utils/cloudinary.js';
import { asyncHandler } from './../utils/AsyncHandler.js';

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, fullName, recoveryKey } = req.body;

  if (!username || !email || !password || !fullName || !recoveryKey) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, 'Please provide all required fields'));
  }

  const existedUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existedUser) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, 'User already exists'));
  }

  const user = new User({
    username,
    email,
    password,
    fullName,
    recoveryKey,
  });

  await user.save();

  if (!user) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, 'Oops! Please try again later'));
  }

  res.status(201).json(new ApiResponse(201, {}, 'User created successfully'));
});

export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, 'Please provide all required fields'));
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json(new ApiResponse(404, null, 'User not found'));
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    return res.status(401).json(new ApiResponse(401, null, 'Invalid Password'));
  }

  const token = await generateToken(user);

  if (!token) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, 'Oops! Please try again later'));
  }

  const userWithoutPassword = await User.findOne({ username }).select(
    '-password',
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie('accessToken', token, options)
    .json(
      new ApiResponse(200, { user: userWithoutPassword }, 'User logged in'),
    );
});

export const logoutUser = asyncHandler(async (req, res) => {
  res
    .clearCookie('accessToken')
    .json(new ApiResponse(200, {}, 'User logged out'));
});

export const recoverPassword = asyncHandler(async (req, res) => {
  const { username, recoveryKey, password } = req.body;

  if (!username || !recoveryKey) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, 'All fields are required.'));
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json(new ApiResponse(404, null, 'User not found'));
  }

  if (user.recoveryKey !== recoveryKey) {
    return res
      .status(401)
      .json(new ApiResponse(401, null, 'Invalid recovery key'));
  }

  user.password = password;

  await user.save();

  res
    .status(200)
    .json(new ApiResponse(200, {}, 'Password updated successfully'));
});
export const updateUser = asyncHandler(async (req, res) => {
  const { user } = req.body;
  const user_id = req.params?.userid;

  if (!user || !user_id) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, 'Please provide all required fields'));
  }

  const existingUser = await User.findById(user_id);

  if (!existingUser) {
    return res.status(404).json(new ApiResponse(404, null, 'User not found'));
  }

  if (user.hasOwnProperty('username')) {
    const sameUsername = await User.findOne({ username: user.username });
    if (sameUsername) {
      return res
        .status(409)
        .json(new ApiResponse(409, {}, 'Username Already Exists'));
    }
  }
  if (user.hasOwnProperty('email')) {
    const sameEmail = await User.findOne({ email: user.email });
    if (sameEmail) {
      return res
        .status(409)
        .json(new ApiResponse(409, {}, 'Email Already Exists'));
    }
  }

  for (const key in user) {
    if (existingUser.schema.obj.hasOwnProperty(key)) {
      existingUser[key] = user[key];
    }
  }

  const updatedUser = await existingUser.save();
  const userWithoutPassword = await User.findById(user_id).select('-password');

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: userWithoutPassword },
        'User updated successfully',
      ),
    );
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user_id = req.params.userid;

  if (!user_id) {
    return res
      .status(401)
      .json(new ApiResponse(401, null, 'User ID is required'));
  }

  const deletedUser = await User.findByIdAndDelete(user_id);

  if (!deleteUser) {
    return res.status(404).json(new ApiResponse(404, {}, 'User Not Found'));
  }

  res
    .status(200)
    .clearCookie('accessToken')
    .json(new ApiResponse(200, {}, 'User Deleted Successfully'));
});

export const updateUserProfilePicture = asyncHandler(async (req, res) => {
  const profilePicture = req.file?.path;
  const user_id = req.params?.userid;

  if (!user_id || !profilePicture) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, 'No Image Selected'));
  }

  const user = await User.findById(user_id).select('-password');

  if (!user) {
    return res.status(404).json(new ApiResponse(404, null, 'User Not Found'));
  }
  const cloudImage = await uploadOnCloudinary(profilePicture);

  if (!cloudImage) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, 'Image Upload Failed'));
  }

  if (user.profileImg && user.profileImg !== '') {
    const deletedImage = await deleteFromCloudinary(user.profileImg);
  }

  user.profileImg = cloudImage;
  await user.save();

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: user },
        'Profile Picture Updated Successfully',
      ),
    );
});

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select(
    '-password -recoveryKey -__v -createdAt -updatedAt -isAdmin -profileImg',
  );

  if (!users) {
    return res.status(404).json(new ApiResponse(404, {}, 'No Users Found'));
  }

  return res.status(200).json(new ApiResponse(200, { users }, 'Users Fetched'));
});

export const getUser = asyncHandler(async (req, res) => {
  const user_id = req.params?.userid;

  if (!user_id) {
    return res
      .status(401)
      .json(new ApiResponse(401, null, 'User ID is required'));
  }

  const user = await User.findById(user_id).select('-password');

  if (!user) {
    return res.status(404).json(new ApiResponse(404, {}, 'User Not Found'));
  }
  return res
    .status(200)
    .json(new ApiResponse(200, { user }, 'User Fetched Successfully'));
});
