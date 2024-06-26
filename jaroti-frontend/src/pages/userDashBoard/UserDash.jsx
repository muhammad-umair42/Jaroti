import { useSelector } from 'react-redux';
import Layout from './../../components/Layout/Layout';
import DashInputs from './DashInputs';
import DashProfileSection from './DashProfileSection';

const UserDash = () => {
  const user = useSelector(state => state.user.user);
  return (
    <Layout>
      <div className="w-full md:p-10 flex-col md:flex-row flex md:justify-start md:items-start justify-center items-center">
        <DashProfileSection user={user} />
        <DashInputs user={user} />
      </div>
    </Layout>
  );
};

export default UserDash;
