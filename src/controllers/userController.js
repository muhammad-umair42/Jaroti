import { User } from '../models/userModel.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { generateToken } from '../utils/Tokens.js';
import { asyncHandler } from './../utils/AsyncHandler.js';

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, fullName, recoveryKey } = req.body;

  if (!username || !email || !password || !fullName || !recoveryKey) {
    res
      .status(400)
      .json(new ApiResponse(400, null, 'Please provide all required fields'));
  }

  const existedUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existedUser) {
    res.status(400).json(new ApiResponse(400, null, 'User already exists'));
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
    res
      .status(500)
      .json(new ApiResponse(500, null, 'Oops! Please try again later'));
  }

  res.status(201).json(new ApiResponse(201, {}, 'User created successfully'));
});

export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res
      .status(400)
      .json(new ApiResponse(400, null, 'Please provide all required fields'));
  }

  const user = await User.findOne({ username });

  if (!user) {
    res.status(404).json(new ApiResponse(404, null, 'User not found'));
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    res.status(401).json(new ApiResponse(401, null, 'Invalid Password'));
  }

  const token = await generateToken(user);

  if (!token) {
    res
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

export const updateUser = asyncHandler(async (req, res) => {
  const { user, user_id } = req.body;

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
  const { password, ...userWithoutPassword } = updatedUser.toObject();

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
  const { user_id } = req.body;

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
