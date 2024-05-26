import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import makeRequest from '../../Api/axios';
import CartImg from '../../assets/cart.png';
import CloseImg from '../../assets/close.png';
import DropdownIcon from '../../assets/dropdownIcon.png';
import HamThin from '../../assets/hamthin.png';
import HeartImg from '../../assets/heart.png';
import LocationImg from '../../assets/location.png';
import logo from '../../assets/logo.png';
import Profile from '../../assets/profile.jpg';
import ProfileImg from '../../assets/profile.png';
import SearchBar from '../SearchBar';
import Accessories from '../navDropDowns/Accessories';
import HandBags from '../navDropDowns/HandBags';
import Jewlery from '../navDropDowns/Jewlery';
const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [LinksOpen, setLinksOpen] = useState(false);
  const [HamOpen, setHamOpen] = useState(false);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const username = 'Umair';
  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollThreshold = 50; // Adjust this value as needed
      const isTop = window.scrollY < scrollThreshold;
      setIsTop(isTop);
    }, 100); // Adjust debounce delay as needed

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLogout = async e => {
    e.preventDefault();
    const makeParams = {
      method: 'get',
      url: `/users/logout/${user?._id}`,
      reqType: 'logout',
      dispatch: dispatch,
    };
    const { success } = await makeRequest(makeParams);
    if (success) {
      window.location.reload();
    }
  };

  return (
    <>
      <nav className="backdrop-blur-sm shadow-lg sticky top-0 left-0 z-50">
        <div
          className={`z-10 ${
            isTop ? 'py-3' : 'py-3'
          } px-3   w-full flex items-center justify-between bg-white`}
        >
          <div className="flex justify-center items-center md:gap-3 gap-8">
            {!isTop && (
              <img
                src={HamThin}
                className="hidden md:flex w-10 cursor-pointer object-contain"
                alt=""
                onClick={() => setLinksOpen(!LinksOpen)}
              />
            )}
            <SearchBar />
            <div className=" hidden md:flex md:justify-center md:items-center md:gap-0 cursor-pointer hover:text-red-700 gap-4">
              <img
                src={LocationImg}
                alt="Search"
                className="w-6 h-7 object-contain "
              />
              <span className="text-sm">FIND A STORE</span>
            </div>
            <div className="flex md:hidden justify-center items-center cursor-pointer relative group parent-div ">
              <img src={HeartImg} className=" w-7 object-cover" alt="" />
              <div className=" child-div group-hover:bg-red-600 absolute bottom-4 bg-black transition duration-300 ease-in-out text-white h-5 w-5 flex items-center justify-center left-4 text-sm    rounded-full">
                4
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="flex-1 flex items-center cursor-pointer justify-center"
          >
            <img
              src={logo}
              alt=""
              className=" w-20  md:w-28   object-contain "
            />
          </Link>
          <div>
            <div className="flex justify-center items-center gap-4">
              <div className=" group relative parent-div hidden md:flex md:justify-center md:items-center md:gap-1 cursor-pointer ">
                <span className="child text-xs font-bold group-hover:text-red-700 ">
                  NEED HELP?
                </span>
                <img
                  src={DropdownIcon}
                  alt="Search"
                  className="w-4 h-4 object-contain"
                />
                <div className="hidden w-max h-max absolute group-hover:flex top-3 pt-6">
                  <div className="      child-div overflow-hidden  shadow-3xl bg-white py-5 px-8 rounded-md flex justify-center items-start flex-col gap-4 text-2xl  ">
                    <div>
                      <span className="font-bold mr-2">Chat:</span>
                      <span>Let&apos;s Chat</span>
                    </div>
                    <div>
                      <span className="font-bold mr-2">Phone:</span>
                      <span>+001 000 000 00</span>
                    </div>
                    <div>
                      <span className="font-bold mr-2">Email:</span>
                      <span>Jaroti@jaroti.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`group relative hidden md:flex md:justify-center md:items-center md:gap-1 cursor-pointer  ${
                  user?.profileImg ? 'w-7 h-7' : 'p-2'
                }  hover:bg-red-400 transition duration-300 ease-in-out rounded-full`}
              >
                {user ? (
                  <img
                    src={user?.profileImg ? `${user.profileImg}` : ProfileImg}
                    className={`${
                      user?.profileImg ? 'w-full h-full' : 'h-4 w-4'
                    } object-cover rounded-full`}
                  />
                ) : (
                  <img
                    src={ProfileImg}
                    alt="Search"
                    className="w-4 h-4 object-cover"
                  />
                )}
                <div
                  className={`hidden w-max h-max absolute group-hover:flex  pt-6 ${
                    user ? 'top-5 left-[-5rem]' : 'top-5 '
                  }`}
                  style={{ right: '-5rem' }}
                >
                  <div className=" child-div overflow-hidden  shadow-3xl bg-white py-5 px-8 rounded-md flex  justify-center items-start  gap-4 text-2xl  ">
                    {user ? (
                      <div className="flex flex-col justify-start items-start gap-4">
                        <span className="font-bold text-xs">
                          Hi, {user?.username}
                        </span>
                        <Link to="/dashboard" className="hover:font-bold">
                          Dashboard
                        </Link>
                        <span
                          className="hover:font-bold hover:text-red-700"
                          onClick={handleLogout}
                        >
                          Logout
                        </span>
                      </div>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="bg-black font-bold px-7 py-2 text-white rounded-2xl hover:bg-red-700 transition duration-300 ease"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="bg-black font-bold px-7 py-2 text-white rounded-2xl hover:bg-red-700 transition duration-300 ease"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center cursor-pointer relative group parent-div ">
                <img src={HeartImg} className=" w-5 object-cover" alt="" />
                <div className=" child-div group-hover:bg-red-600 absolute bottom-3 bg-black transition duration-300 ease-in-out text-white h-5 w-5 flex items-center justify-center left-3 text-xxs    rounded-full">
                  4
                </div>
              </div>
              <div className="flex justify-center items-center cursor-pointer relative group parent-div ">
                <img src={CartImg} className="w-8 md:w-7 object-cover" alt="" />
                <div className=" child-div group-hover:bg-red-600 absolute bottom-4 bg-black transition duration-300 ease-in-out text-white h-5 w-5 md:h-5 md:w-5 flex items-center justify-center left-5 md:left-4 md:bottom-4 text-sm md:text-xxs    rounded-full">
                  4
                </div>
              </div>
              <img
                src={HamThin}
                className="flex md:hidden w-14 cursor-pointer object-contain"
                alt=""
                onClick={() => {
                  setHamOpen(true);
                }}
              />
            </div>
          </div>
        </div>
        {/* Links */}
        {(isTop || LinksOpen) && (
          <div className="w-full bg-white hidden md:flex justify-center items-center gap-10 py-5 text-base">
            <span className="cursor-pointer hover:text-red-700 transition duration-300 ease">
              Home
            </span>
            <span>
              <Jewlery />
            </span>
            <span>
              <HandBags />
            </span>
            <span>
              <Accessories />
            </span>
            <span className="cursor-pointer hover:text-red-700 transition duration-300 ease">
              Sale
            </span>
            <span className="cursor-pointer hover:text-red-700 transition duration-300 ease">
              About us
            </span>
            <span className="cursor-pointer hover:text-red-700 transition duration-300 ease">
              Contact us
            </span>
            <span className="cursor-pointer hover:text-red-700 transition duration-300 ease">
              Blog
            </span>
          </div>
        )}
      </nav>
      {/* Hamburger */}
      {HamOpen && (
        <div className="bg-white w-full fixed top-0 left-0 h-full flex flex-col justify-start items-center">
          {/* Top */}
          <div className="flex justify-between items-center p-5 w-full border-b border-slate-400 ">
            <img src={logo} className="object-contain w-32" alt="" />
            <div
              className="h-8 w-8 rounded-full flex justify-center items-center border-black border cursor-pointer"
              onClick={() => setHamOpen(false)}
            >
              <img src={CloseImg} className="h-5 w-5 object-contain" alt="" />
            </div>
          </div>
          {/* Center */}
          <div className="flex flex-col gap-2 w-full h-full py-5">
            {/* Profile */}
            <div className=" border-b border-slate-300  py-3">
              {user ? (
                <div className="flex flex-col justify-center items-center gap-3">
                  <img
                    src={Profile}
                    className="h-24 w-24 object-cover rounded-full"
                    alt=""
                  />
                  <span className="font-bold">Hi, {username}</span>
                  <span className="px-5 py-2 rounded-3xl border border-slate-400 cursor-pointer">
                    DashBoard
                  </span>
                  <span className="mt-3 px-5 py-2 rounded-3xl bg-red-700 font-bold text-white cursor-pointer">
                    Logout
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <img
                    src={ProfileImg}
                    className=" w-12 object-contain"
                    alt=""
                  />
                  <Link
                    to="/register"
                    className="px-5 py-1 rounded-3xl bg-red-700 font-bold text-white"
                  >
                    Register
                  </Link>
                  <Link
                    to="login"
                    className="px-5 py-1 rounded-3xl bg-red-700 font-bold text-white"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center justify-center flex-wrap">
              <span className="px-4 py-1 rounded-3xl border border-slate-500 cursor-pointer">
                Jewlery
              </span>
              <span className="px-4 py-1 rounded-3xl border border-slate-500 cursor-pointer">
                Handbags
              </span>
              <span className="px-4 py-1 rounded-3xl border border-slate-500 cursor-pointer">
                Accessories
              </span>
              <span className="px-4 py-1 rounded-3xl border border-slate-500 cursor-pointer">
                Sale
              </span>
              <span className="px-4 py-1 rounded-3xl border border-slate-500 cursor-pointer">
                About us
              </span>
              <span className="px-4 py-1 rounded-3xl border border-slate-500 cursor-pointer">
                Contact us
              </span>
              <span className="px-4 py-1 rounded-3xl border border-slate-500 cursor-pointer">
                Blog
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
