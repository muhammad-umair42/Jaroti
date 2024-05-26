import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="flex  w-full bg-slate-700 px-4 py-2 h-max  justify-center items-center gap-5 sticky top-[65px]">
      <Link
        to="/dashboard"
        className={`py-2 px-3 cursor-pointer font-bold text-white border border-slate-300 rounded-xl text-xs hover:bg-slate-500 transition duration-300 ease ${
          path === '/dashboard' ? 'bg-slate-500' : ''
        }`}
      >
        Your Profile
      </Link>
      <Link
        to="/dashboard/users"
        className={`py-2 px-3 cursor-pointer font-bold text-white border border-slate-300 rounded-xl text-xs hover:bg-slate-500 transition duration-300 ease ${
          path === '/dashboard/users' ? 'bg-slate-500' : ''
        }`}
      >
        Users
      </Link>
      <Link
        to="/dashboard/products"
        className={`py-2 px-3 cursor-pointer font-bold text-white border border-slate-300 rounded-xl text-xs hover:bg-slate-500 transition duration-300 ease ${
          path === '/dashboard/products' ? 'bg-slate-500' : ''
        }`}
      >
        Products
      </Link>
    </div>
  );
};

export default Sidebar;
