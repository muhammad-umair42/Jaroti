/* eslint-disable react/prop-types */
import Layout from './../../components/Layout/Layout';
import DashInputs from './../userDashBoard/DashInputs';
import DashProfileSection from './../userDashBoard/DashProfileSection';
import AdminLayout from './AdminLayout';
const AdminDash = ({ user }) => {
  return (
    <Layout>
      <AdminLayout>
        <div className="flex justify-between items-start md:flex-row flex-col py-5 px-5">
          <DashProfileSection user={user} />
          <DashInputs user={user} />
        </div>
      </AdminLayout>
    </Layout>
  );
};

export default AdminDash;
