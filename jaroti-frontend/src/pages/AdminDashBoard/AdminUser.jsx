/* eslint-disable react/prop-types */
import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeRequest } from './../../Api/axios';
import Layout from './../../components/Layout/Layout';
import DashInputs from './../userDashBoard/DashInputs';
import DashProfileSection from './../userDashBoard/DashProfileSection';
import AdminLayout from './AdminLayout';
const AdminUser = () => {
  const [currentUser, setCurrentUser] = useState({});
  let { id } = useParams();
  useLayoutEffect(() => {
    const fetchUser = async () => {
      const makeParams = {
        method: 'get',
        reqType: 'getuser',
        url: `/users/user/${id} `,
      };
      const { resData, success } = await makeRequest(makeParams);
      if (success) {
        return setCurrentUser(resData);
      } else {
        console.log('Error Fetching User');
      }
    };

    fetchUser();
  }, [id]);
  return (
    <Layout>
      <AdminLayout>
        <div className="flex justify-between items-start md:flex-row flex-col py-5 px-5">
          <DashProfileSection user={currentUser} ApiUser={true} />
          <DashInputs user={currentUser} ApiUser={true} />
        </div>
      </AdminLayout>
    </Layout>
  );
};

export default AdminUser;
