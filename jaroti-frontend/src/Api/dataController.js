/* eslint-disable no-unused-vars */
import { reset, setUser } from '../redux/Slices/userSlice';
export const dataController = (reqType, data, dispatch) => {
  let resData = null;
  switch (reqType) {
    case 'register':
      data = data?.message;
      break;
    case 'recoverpassword':
      data = data?.message;
      break;
    case 'login':
      dispatch(setUser({ user: data?.data?.user }));
      break;
    case 'logout':
      dispatch(reset());
      break;
    case 'updateProfilePicture':
      dispatch(setUser({ user: data?.data?.user }));
      break;
    case 'updateuser':
      dispatch(setUser({ user: data?.data?.user }));
      break;
    case 'deleteuser':
      dispatch(reset());
      break;
    case 'getusers':
      resData = data?.data?.users;
      break;
    case 'getuser':
      resData = data?.data?.user;
      break;

    default:
      break;
  }
  return resData;
};
