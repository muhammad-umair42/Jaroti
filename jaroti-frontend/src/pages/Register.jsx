/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import makeRequest from '../Api/axios';
import Logo from '../assets/logo.png';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fullName: '',
    recoveryKey: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = () => {
    const errors = {};
    for (const key in formData) {
      formData[key] = formData[key].trim();
      if (formData[key] === null || formData[key] == '') {
        errors[key] = 'error';
      }
    }
    if (formData.password !== formData.confirmPassword) {
      errors['confirmPassword'] = 'error';
      errors['password'] = 'error';
      toast.error('Passwords do not Match');
    }
    setFormErrors(errors);

    if (Object.entries(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();

    const isOk = validateFormData();

    if (isOk) {
      const reqPramas = {
        method: 'post',
        url: '/users/register',
        reqData: formData,
        reqType: 'register',
      };

      const { success, resData } = await makeRequest(reqPramas);
      if (success) {
        navigate('/login');
      }
    }
  };

  return (
    <div className="w-full p-5 h-full md:min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-start justify-start shadow-2xl  py-6 px-6 rounded-lg gap-7 w-full md:min-w-96 md:max-w-lg">
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <img src={Logo} className=" w-32 object-contain" alt="" />
          <span className="text-3xl font-bold">Sign Up</span>
        </div>
        <div className=" flex flex-col items-center justify-center w-full md:grid md:grid-cols-2 md:gap-10 md:items-start md:justify-start">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Username:</span>
              <input
                type="text"
                className={`w-full  rounded-2xl border ${
                  formErrors?.username ? 'border-red-700 ' : 'border-slate-400 '
                } outline-0 py-2 px-3 `}
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Email:</span>
              <input
                type="text"
                className={`w-full   rounded-2xl border ${
                  formErrors?.email ? 'border-red-700 ' : 'border-slate-400 '
                } outline-0 py-2 px-3`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Full Name</span>
              <input
                type="text"
                className={`w-full  rounded-2xl border ${
                  formErrors?.fullName ? 'border-red-700 ' : 'border-slate-400 '
                } outline-0 py-2 px-3`}
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Password Recovery Key:</span>
              <input
                type="text"
                className={`w-full  rounded-2xl border ${
                  formErrors?.recoveryKey
                    ? 'border-red-700 '
                    : 'border-slate-400 '
                } outline-0 py-2 px-3`}
                name="recoveryKey"
                value={formData.recoveryKey}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Password:</span>
              <input
                type="password"
                className={`w-full  rounded-2xl border ${
                  formErrors?.password ? 'border-red-700 ' : 'border-slate-400 '
                } outline-0 py-2 px-3`}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Confirm Password:</span>
              <input
                type="password"
                className={`w-full  rounded-2xl border ${
                  formErrors?.confirmPassword
                    ? 'border-red-700 '
                    : 'border-slate-400 '
                } outline-0 py-2 px-3`}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <button
            className="w-full border border-slate-400 hover:bg-red-700 hover:text-white py-2 rounded-2xl font-extrabold uppercase transition duration-300 ease"
            onClick={handleRegisterSubmit}
          >
            Register
          </button>
          <div className="">
            <span className="text-xs">
              Already have an account?
              <Link to="/login" className="text-red-700 ml-2 cursor-pointer">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
