import CartImg from '../../assets/cart.png';
import DropdownIcon from '../../assets/dropdownIcon.png';
import HeartImg from '../../assets/heart.png';
import LocationImg from '../../assets/location.png';
import logo from '../../assets/logo.png';
import ProfileImg from '../../assets/profile.png';
import SearchImg from '../../assets/searchicon.png';
const Navbar = () => {
  return (
    <div className="h-20 px-5 pt-5  w-full flex items-center justify-between">
      <div className="flex justify-center items-center gap-5 ">
        <div className="flex justify-center items-center gap-1 cursor-pointer">
          <img
            src={SearchImg}
            alt="Search"
            className="w-6 h-6 object-contain"
          />
          <span className="hidden md:block text-sm hover:text-red-700">
            SEARCH
          </span>
        </div>
        <div className=" hidden md:flex md:justify-center md:items-center md:gap-1 cursor-pointer hover:text-red-700">
          <img
            src={LocationImg}
            alt="Search"
            className="w-7 h-7 object-contain"
          />
          <span className="text-sm">FIND A STORE</span>
        </div>
      </div>
      <div className="flex-1 flex items-center cursor-pointer justify-center">
        <img src={logo} alt="" className="w-32   object-contain " />
      </div>
      <div>
        <div className="flex justify-center items-center gap-4">
          <div className="hidden md:flex md:justify-center md:items-center md:gap-1 cursor-pointer hover:text-red-700">
            <span className="text-sm font-bold">NEED HELP?</span>
            <img
              src={DropdownIcon}
              alt="Search"
              className="w-4 h-4 object-contain"
            />
          </div>
          <div className="hidden md:flex md:justify-center md:items-center md:gap-1 cursor-pointer  p-2 hover:bg-red-400 transition duration-300 ease-in-out rounded-full">
            <img
              src={ProfileImg}
              alt="Search"
              className="w-5 h-5 object-contain"
            />
          </div>
          <div className="flex justify-center items-center cursor-pointer relative group parent-div ">
            <img src={HeartImg} className=" w-6 object-cover" alt="" />
            <div className=" child-div group-hover:bg-red-600 absolute bottom-3 bg-black transition duration-300 ease-in-out text-white h-6 w-6 flex items-center justify-center left-3 text-xs    rounded-full">
              4
            </div>
          </div>
          <div className="flex justify-center items-center cursor-pointer relative group parent-div ">
            <img src={CartImg} className=" w-9 object-cover" alt="" />
            <div className=" child-div group-hover:bg-red-600 absolute bottom-5 bg-black transition duration-300 ease-in-out text-white h-6 w-6 flex items-center justify-center left-5 text-xs    rounded-full">
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
