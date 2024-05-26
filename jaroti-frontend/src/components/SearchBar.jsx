import { useState } from 'react';
import CloseImg from '../assets/close.png';
import SearchImg from '../assets/searchicon.png';

const SearchBar = () => {
  const HandleOpenSearchBar = () => {
    return setOpenSearchBar(!OpensearchBar);
  };
  const [OpensearchBar, setOpenSearchBar] = useState(false);
  return (
    <>
      <div
        className="  flex justify-center items-center gap-1 cursor-pointer"
        onClick={() => setOpenSearchBar(true)}
      >
        <img
          src={SearchImg}
          alt="Search"
          className="w-6 md:w-5  object-contain"
        />
        <span className="hidden md:block text-sm hover:text-red-700">
          SEARCH
        </span>
      </div>

      {OpensearchBar == true && (
        <div className="flex justify-center items-center gap-2 bg-white absolute top-0 left-0 w-screen h-20 z-20 px-6 py-4">
          <img src={SearchImg} className="object-contain  w-8" alt="" />
          <input
            type="text"
            className="flex-1 outline-0 text-lg"
            placeholder="Search for Products...   "
          />

          <img
            src={CloseImg}
            className=" w-8  object-cover z-10 cursor-pointer"
            alt=""
            onClick={HandleOpenSearchBar}
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
