/* eslint-disable no-unused-vars */
export const dataController = (reqType, data, dispatch) => {
  let resData = null;
  switch (reqType) {
    case 'register':
      data = data?.message;
      break;
    case 'recoverpassword':
      data = data?.message;
      break;
    default:
      break;
  }
  return resData;
};
