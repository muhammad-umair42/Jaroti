/* eslint-disable react/prop-types */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { makeRequest } from './../../Api/axios';
const DashInputs = ({ user }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fullName: '',
    recoveryKey: '',
    confirmPassword: '',
  });
  const [dataForUpdate, setDataForUpdate] = useState({});
  const [formErrors, setFormErrors] = useState();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = () => {
    const errors = {};

    const filteredData = Object.keys(formData).reduce((acc, key) => {
      if (formData[key]) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    if (Object.keys(filteredData).length === 0) {
      toast.error('Oops! Nothing to Update');
      return false;
    }

    setDataForUpdate(filteredData);
    if (filteredData?.password !== filteredData?.confirmPassword) {
      errors['confirmPassword'] = 'error';
      errors['password'] = 'error';
      return toast.error('Passwords do not Match');
    }
    setFormErrors(errors);

    if (Object.entries(errors).length === 0) {
      return true;
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
        url: '/users/updateuser',
        reqData: dataForUpdate,
        reqType: 'updateuser',
      };
      const { success } = await makeRequest(reqPramas);
      if (success) {
        toast.success('Details Updated Successfully');
      }
    }

    return;
  };

  return (
    <div className=" py-5 pb-10 flex-1 flex justify-start items-center flex-col w-full gap-5">
      <div className="flex flex-col w-full justify-start items-center gap-3">
        <span className="text-sm font-bold">Hi, {user.fullName}</span>
        <div className="flex flex-col justify-start items-start w-full max-w-[70%] gap-2">
          <span className="text-xs">Username:</span>
          <input
            type="text"
            className={`w-full outline-none border ${
              formErrors?.username ? 'border-red-700 ' : 'border-slate-400 '
            } rounded-2xl py-1 px-3`}
            name="username"
            placeholder={user?.username}
            value={formData.username}
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
            value={formData.fullName}
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
            value={formData.email}
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
            value={formData.recoveryKey}
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
            value={formData.password}
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
      <div className="w-full max-w-[70%]">
        <button
          className="py-2 w-full text-sm transition duration-300 ease  rounded-2xl border border-slate-800 hover:bg-red-700 hover:text-white font-bold uppercase"
          onClick={handleUpdateDetails}
        >
          Update Details
        </button>
      </div>
    </div>
  );
};

export default DashInputs;
