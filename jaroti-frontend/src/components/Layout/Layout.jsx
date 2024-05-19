/* eslint-disable react/prop-types */
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full bg-black py-3 px-4 text-white text-xxs flex justify-between items-center ">
        <span>
          ENJOY 15% OFF WITH TWO OR MORE ITEMS & FREE SHIPPING ON ALL ORDERS.
        </span>
        <div className="flex gap-5 text-xs">
          <span>English</span>
          <span>USD</span>
        </div>
      </div>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
