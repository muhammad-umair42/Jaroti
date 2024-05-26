import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
import { ApiResponse } from '../utils/ApiResponse.js';
export const isUserAuthenticated = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.accessToken;
    if (!accessToken) {
      return res
        .status(403)
        .json(new ApiResponse(401, null, 'Auth Token Missing'));
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) {
      return res.status(401).json(new ApiResponse(403, null, 'Unvalid Token'));
    }
    if (decoded.id !== req.params.userid) {
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json(new ApiResponse(404, {}, 'User Not Found'));
      }
      if (user.isAdmin) {
        return next();
      } else {
        return res
          .status(403)
          .json(new ApiResponse(403, {}, 'Unauthorized Access'));
      }
    }

    next();
  } catch (error) {
    if (error.message === 'jwt expired') {
      return res
        .status(403)
        .json(new ApiResponse(403, {}, 'Your Session Has Been Expired'));
    }
    return res
      .status(500)
      .json(new ApiResponse(500, error, 'Internal Server Error'));
  }
};
