import axios from 'axios';
import { toast } from 'react-toastify';
import { reset } from '../redux/Slices/userSlice';
import { store } from '../redux/store';
import { dataController } from './dataController';

const instance = axios.create({
  baseURL: `http://localhost:4000`,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fileInstance = axios.create({
  baseURL: `http://localhost:4000`,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const makeRequest = async ({
  method,
  url,
  reqData = null,
  reqType = '',
  dispatch = null,
}) => {
  let success = false;
  let resData = null;

  try {
    let data = null;

    if (
      reqType === 'updateProfilePicture' ||
      reqType === 'updateApiUserProfile'
    ) {
      const { data: fileData } = await fileInstance[method](
        `/api/v1${url}`,
        reqData,
      );
      data = fileData;
    } else {
      const { data: fileData } = await instance[method](
        `/api/v1${url}`,
        reqData,
      );
      data = fileData;
    }

    resData = dataController(reqType, data, dispatch);
    success = true;
    return { success, resData };
  } catch (error) {
    //SHOWING ERROR
    toast.error(error?.response?.data?.message);
    if (error?.response?.status === 403) {
      store.dispatch(reset());
    }
    return { success, resData };
  }
};

export default makeRequest;
