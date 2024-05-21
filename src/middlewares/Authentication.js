import jwt from 'jsonwebtoken';
import { ApiResponse } from '../utils/ApiResponse.js';
export const isUserAuthenticated = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.accessToken;
    if (!accessToken) {
      return res
        .status(401)
        .json(new ApiResponse(401, null, 'Auth Token Missing'));
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) {
      return res.status(401).json(new ApiResponse(401, null, 'Unvalid Token'));
    }
    if (decoded.id !== req.body.user_id) {
      return res
        .status(401)
        .json(new ApiResponse(401, null, 'Un Authorized Request'));
    }

    next();
  } catch (error) {
    if (error.message === 'jwt expired') {
      res
        .status(400)
        .json(new ApiResponse(400, {}, 'Your Session Has Been Expired'));
    }
    res
      .status(500)
      .json(new ApiResponse(500, error.message, 'Internal Server Error'));
  }
};
