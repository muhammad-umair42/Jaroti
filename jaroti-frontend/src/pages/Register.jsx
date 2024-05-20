import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fullname: '',
    passwordRecoveryKey: '',
    confirmPassword: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
                className="w-full  rounded-2xl border border-slate-400 outline-0 py-2 px-3"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Email:</span>
              <input
                type="text"
                className="w-full  rounded-2xl border border-slate-400 outline-0 py-2 px-3"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Full Name</span>
              <input
                type="text"
                className="w-full  rounded-2xl border border-slate-400 outline-0 py-2 px-3"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Password Recovery Key:</span>
              <input
                type="text"
                className="w-full  rounded-2xl border border-slate-400 outline-0 py-2 px-3"
                name="passwordRecoveryKey"
                value={formData.passwordRecoveryKey}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Password:</span>
              <input
                type="password"
                className="w-full  rounded-2xl border border-slate-400 outline-0 py-2 px-3"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full  justify-center items-start gap-2">
              <span className="text-xs">Confirm Password:</span>
              <input
                type="password"
                className="w-full  rounded-2xl border border-slate-400 outline-0 py-2 px-3"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <button className="w-full border border-slate-400 hover:bg-red-700 hover:text-white py-2 rounded-2xl font-extrabold uppercase transition duration-300 ease">
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
