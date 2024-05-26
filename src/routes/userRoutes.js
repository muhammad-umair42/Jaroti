import { Router } from 'express';

import {
  deleteUser,
  getUser,
  getUsers,
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
router.route('/updateuser/:userid').post(isUserAuthenticated, updateUser);
router.route('/recoverpassword').post(recoverPassword);
router.route('/logout/:userid').get(isUserAuthenticated, logoutUser);
router.route('/deleteuser/:userid').delete(isUserAuthenticated, deleteUser);
router
  .route('/user/updateprofileimage/:userid')
  .post(
    isUserAuthenticated,
    upload.single('profilePicture'),
    updateUserProfilePicture,
  );
router.route('/').get(isUserAuthenticated, getUsers);
router.route('/user/:userid').get(isUserAuthenticated, getUser);

export default router;
