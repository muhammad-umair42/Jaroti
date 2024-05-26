/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makeRequest } from './../../Api/axios';
const DashInputs = ({ user, ApiUser = false }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fullName: '',
    recoveryKey: '',
    confirmPassword: '',
  });
  const [deleteAccountDialog, setDeleteAccountDialog] = useState(false);

  const [formErrors, setFormErrors] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = () => {
    const errors = {};

    // Filter out empty fields
    const filteredData = Object.keys(formData).reduce((acc, key) => {
      if (formData[key]) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    // If no data to update, show error
    if (Object.keys(filteredData).length === 0) {
      toast.error('Oops! Nothing to Update');
      return false;
    }

    // Check if passwords match
    if (
      filteredData.password &&
      filteredData.password !== filteredData.confirmPassword
    ) {
      errors['confirmPassword'] = 'error';
      errors['password'] = 'error';
      toast.error('Passwords do not Match');
    }

    // Update form errors state
    setFormErrors(errors);

    // If there are no errors, update the data and return true
    if (Object.keys(errors).length === 0) {
      // Set the filtered data
      return filteredData;
    } else {
      return false;
    }
  };

  const handleUpdateDetails = async e => {
    e.preventDefault();
    const isOk = validateFormData();
    if (isOk) {
      const reqPramas = {
        method: 'post',
        url: `/users/updateuser/${user?._id}`,
        reqData: { user: isOk },
        reqType: `${ApiUser ? '' : 'updateuser'}`,
        dispatch,
      };
      const { success } = await makeRequest(reqPramas);
      if (success) {
        window.location.reload();
      }
    }

    return;
  };

  const handleDeleteAccount = async () => {
    const reqPramas = {
      method: 'delete',
      url: `/users/deleteuser/${user?._id}`,
      reqType: 'deleteuser',
      dispatch,
    };
    const { success } = await makeRequest(reqPramas);
    if (success) {
      navigate('/');
    }
  };
  return (
    <div className=" py-5 pb-10 flex-1 flex justify-start items-center flex-col w-full gap-5">
      <div className="flex flex-col w-full justify-start items-center gap-3">
        <span className="text-sm font-bold">Hi, {user?.fullName}</span>
        <span className="w-full max-w-[70%] text-start text-sm font-bold">
          Fill the Fields you want to UPDATE!
        </span>
        <div className="flex flex-col justify-start items-start w-full max-w-[70%] gap-2">
          <span className="text-xs">Username:</span>
          <input
            type="text"
            className={`w-full outline-none border ${
              formErrors?.username ? 'border-red-700 ' : 'border-slate-400 '
            } rounded-2xl py-1 px-3`}
            name="username"
            placeholder={user?.username}
            value={formData?.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full max-w-[70%] gap-2">
          <span className="text-xs">Fullname:</span>
          <input
            type="text"
            className={`w-full outline-none border ${
              formErrors?.fullName ? 'border-red-700 ' : 'border-slate-400 '
            } rounded-2xl py-1 px-3`}
            name="fullName"
            placeholder={user?.fullName}
            value={formData?.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full max-w-[70%] gap-2">
          <span className="text-xs">Email:</span>
          <input
            type="email"
            className={`w-full outline-none border ${
              formErrors?.email ? 'border-red-700 ' : 'border-slate-400 '
            } rounded-2xl py-1 px-3`}
            name="email"
            placeholder={user?.email}
            value={formData?.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full max-w-[70%] gap-2">
          <span className="text-xs">Recovery Key:</span>
          <input
            type="text"
            className={`w-full outline-none border ${
              formErrors?.recoveryKey ? 'border-red-700 ' : 'border-slate-400 '
            } rounded-2xl py-1 px-3`}
            name="recoveryKey"
            placeholder={user?.recoveryKey}
            value={formData?.recoveryKey}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full max-w-[70%] gap-2">
          <span className="text-xs">New password:</span>
          <input
            type="password"
            className={`w-full outline-none border ${
              formErrors?.password ? 'border-red-700 ' : 'border-slate-400 '
            } rounded-2xl py-1 px-3`}
            name="password"
            value={formData?.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full max-w-[70%] gap-2">
          <span className="text-xs">Confirm password:</span>
          <input
            type="password"
            className={`w-full outline-none border ${
              formErrors?.confirmPassword
                ? 'border-red-700 '
                : 'border-slate-400 '
            } rounded-2xl py-1 px-3`}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="w-full max-w-[70%] ">
        <button
          className="py-2 w-full text-sm transition duration-300 ease  rounded-2xl border border-slate-800 hover:bg-red-700 hover:text-white font-bold uppercase"
          onClick={handleUpdateDetails}
        >
          Update Details
        </button>
        <div className="mt-10 w-full flex items-end justify-end ">
          <button
            className="py-2 px-3 text-xs transition duration-300 ease  rounded-2xl border border-slate-800 bg-red-700 text-white font-bold uppercase hover:bg-white hover:text-black"
            onClick={() => setDeleteAccountDialog(true)}
          >
            Delete Account
          </button>
          {deleteAccountDialog && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-slate-500/50 flex justify-center items-center">
              <div className="w-1/3 h-1/3 bg-white rounded-xl flex flex-col justify-center items-center">
                <span className="font-bold text-center">
                  Do you want to delete your account?
                </span>
                <div className="w-full flex flex-wrap justify-between items-center px-7 mt-10">
                  <button
                    className="py-3 px-3 rounded-2xl border border-slate-400 bg-white text-xxs text-black uppercase hover:bg-red-700  hover:text-white transition duration-300 ease  font-bold"
                    onClick={() => setDeleteAccountDialog(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className=" border-slate-400 py-3 px-3 rounded-2xl border bg-red-700 text-xxs text-white uppercase hover:bg-white hover:text-black transition duration-300 ease  font-bold"
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashInputs;
