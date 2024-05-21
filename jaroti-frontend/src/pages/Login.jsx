import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import makeRequest from '../Api/axios';
import Logo from '../assets/logo.png';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateFormData = () => {
    const errors = {};
    for (const key in formData) {
      formData[key] = formData[key].trim();
      if (formData[key] === null || formData[key] == '') {
        errors[key] = 'error';
      }
    }

    setFormErrors(errors);

    if (Object.entries(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    const isOk = validateFormData();

    if (isOk) {
      const makePrams = {
        method: 'post',
        url: '/users/login',
        reqData: formData,
        reqType: 'login',
        dispatch: dispatch,
      };
      const { success } = await makeRequest(makePrams);
      if (success) {
        navigate('/');
      } else {
        return 0;
      }
    }
  };

  return (
    <div className="w-full p-5 h-full md:min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-start justify-start shadow-2xl  py-6 px-6 rounded-lg gap-7 w-full md:min-w-96 md:max-w-lg">
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <img src={Logo} className=" w-32 object-contain" alt="" />
          <span className="text-3xl font-bold">Sign In</span>
        </div>
        <div className=" flex flex-col items-center justify-center w-full md:grid md:grid-cols-2 md:gap-10 md:items-start md:justify-start">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Username:</span>
              <input
                type="text"
                className={`w-full  rounded-2xl border ${
                  formErrors?.username ? 'border-red-700 ' : 'border-slate-400 '
                } outline-0 py-2 px-3`}
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
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
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <button
            className="w-full border border-slate-400 hover:bg-red-700 hover:text-white py-2 rounded-2xl font-extrabold uppercase transition duration-300 ease"
            onClick={handleLoginSubmit}
          >
            Login
          </button>
          <div className="flex flex-col justify-start items-start gap-3">
            <span className="text-xs">
              Create new account?
              <Link to="/register" className="text-red-700 ml-2 cursor-pointer">
                Sign Up
              </Link>
            </span>
            <span className="text-xs">
              Forgot Password?
              <Link
                to="/recoverpassword"
                className="text-red-700 ml-2 cursor-pointer"
              >
                Recover Password
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
