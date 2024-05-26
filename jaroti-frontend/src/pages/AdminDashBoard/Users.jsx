import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { makeRequest } from './../../Api/axios';
import AdminLayout from './AdminLayout';

const Users = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useLayoutEffect(() => {
    const fetchUsers = async () => {
      const makeParams = {
        method: 'get',
        url: '/users/',
        reqType: 'getusers',
      };

      const { resData, success } = await makeRequest(makeParams);
      if (success) {
        return setUsers(resData);
      }
    };
    fetchUsers();
  }, []);
  return (
    <Layout>
      <AdminLayout>
        <div className="py-20 px-10">
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full ">
              <thead>
                <tr className="bg-slate-300 border-b border-black">
                  <th className="sticky top-0  z-10">Username</th>
                  <th className="sticky top-0  z-10">Name</th>
                  <th className="sticky top-0  z-10">Email</th>
                  <th className="sticky top-0  z-10">Actions</th>
                </tr>
              </thead>
              <tbody className=" bg-slate-200 ">
                {users?.map(u => (
                  <tr
                    key={u?._id}
                    className="border-b border-white hover:bg-slate-400 cursor-pointer transition duration-300 ease "
                    onClick={() => navigate(`/dashboard/users/user/${u?._id}`)}
                  >
                    <td className="py-2 px-2 text-center text-xs md:text-sm">
                      {u?.username}
                    </td>
                    <td className="py-2 px-2 text-center text-xs md:text-sm">
                      {u?.fullName}
                    </td>
                    <td className="py-2 px-2 text-center text-xs md:text-sm">
                      {u?.email}
                    </td>
                    <td className="py-2 px-2 text-center text-xs md:text-sm">
                      <button className="bg-blue-500 text-white py-1 px-2 rounded-md">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </Layout>
  );
};

export default Users;
