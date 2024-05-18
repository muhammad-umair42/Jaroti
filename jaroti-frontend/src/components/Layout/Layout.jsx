/* eslint-disable react/prop-types */
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full bg-black p-5"></div>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
