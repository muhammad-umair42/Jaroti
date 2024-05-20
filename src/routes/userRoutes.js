import { Router } from 'express';

import {
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from '../controllers/userController.js';
import { isUserAuthenticated } from './../middlewares/Authentication.js';

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/updateuser').post(isUserAuthenticated, updateUser);
router.route('/logout').get(logoutUser);

export default router;
