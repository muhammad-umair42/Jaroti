import jwt from 'jsonwebtoken';
import { asyncHandler } from './AsyncHandler.js';
export const generateToken = async user => {
  try {
    return await jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
  } catch (error) {
    console.log('JWT ', error);
    return false;
  }
};
