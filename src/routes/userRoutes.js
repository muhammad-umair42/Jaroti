import { Router } from 'express';

import {
  loginUser,
  logoutUser,
  recoverPassword,
  registerUser,
  updateUser,
  updateUserProfilePicture,
} from '../controllers/userController.js';
import { isUserAuthenticated } from './../middlewares/Authentication.js';
import { upload } from './../middlewares/multer.js';

const router = Router();

// User Routes
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/updateuser').post(isUserAuthenticated, updateUser);
router.route('/recoverpassword').post(recoverPassword);
router.route('/logout').get(logoutUser);
router
  .route('/user/updateprofileimage/:userid')
  .post(
    isUserAuthenticated,
    upload.single('profilePicture'),
    updateUserProfilePicture,
  );

export default router;
