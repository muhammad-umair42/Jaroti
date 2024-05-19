import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import CartImg from '../../assets/cart.png';
import DropdownIcon from '../../assets/dropdownIcon.png';
import HamThin from '../../assets/hamthin.png';
import HeartImg from '../../assets/heart.png';
import LocationImg from '../../assets/location.png';
import logo from '../../assets/logo.png';
import ProfileImg from '../../assets/profile.png';
import SearchBar from '../SearchBar';
import Accessories from '../navDropDowns/Accessories';
import HandBags from '../navDropDowns/HandBags';
import Jewlery from '../navDropDowns/Jewlery';
const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [LinksOpen, setLinksOpen] = useState(false);
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

  return (
    <>
      <nav className="backdrop-blur-sm shadow-lg sticky top-0 left-0">
        <div
          className={`z-10 ${
            isTop ? 'py-6' : 'py-3'
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
              <img src={HeartImg} className=" w-8 object-cover" alt="" />
              <div className=" child-div group-hover:bg-red-600 absolute bottom-4 bg-black transition duration-300 ease-in-out text-white h-7 w-7 flex items-center justify-center left-4 text-sm    rounded-full">
                4
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center cursor-pointer justify-center">
            <img src={logo} alt="" className="w-28   object-contain " />
          </div>
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
              <div className=" group relative hidden md:flex md:justify-center md:items-center md:gap-1 cursor-pointer  p-2 hover:bg-red-400 transition duration-300 ease-in-out rounded-full">
                <img
                  src={ProfileImg}
                  alt="Search"
                  className="w-4 h-4 object-contain"
                />
                <div
                  className="hidden w-max h-max absolute group-hover:flex top-5  pt-6"
                  style={{ right: '-5rem' }}
                >
                  <div className=" child-div overflow-hidden  shadow-3xl bg-white py-5 px-8 rounded-md flex justify-center items-start  gap-4 text-2xl  ">
                    <div className="bg-black font-bold px-7 py-2 text-white rounded-2xl hover:bg-red-700 transition duration-300 ease">
                      Login
                    </div>
                    <div className="bg-black font-bold px-7 py-2 text-white rounded-2xl hover:bg-red-700 transition duration-300 ease">
                      Register
                    </div>
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
                <img
                  src={CartImg}
                  className="w-10 md:w-7 object-cover"
                  alt=""
                />
                <div className=" child-div group-hover:bg-red-600 absolute bottom-5 bg-black transition duration-300 ease-in-out text-white h-7 w-7 md:h-5 md:w-5 flex items-center justify-center left-5 md:left-4 md:bottom-4 text-sm md:text-xxs    rounded-full">
                  4
                </div>
              </div>
              <img
                src={HamThin}
                className="flex md:hidden w-14 cursor-pointer object-contain"
                alt=""
                onClick={() => setLinksOpen(!LinksOpen)}
              />
            </div>
          </div>
        </div>
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
    </>
  );
};

export default Navbar;
