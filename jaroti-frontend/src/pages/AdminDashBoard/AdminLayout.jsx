/* eslint-disable react/prop-types */
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
