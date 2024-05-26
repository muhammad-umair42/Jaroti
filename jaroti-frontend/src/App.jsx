import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminProfile from './pages/AdminDashBoard/AdminProfile';
import AdminUser from './pages/AdminDashBoard/AdminUser';
import Users from './pages/AdminDashBoard/Users';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import Register from './pages/Register';
import UserDash from './pages/userDashBoard/UserDash';
function App() {
  const user = useSelector(state => state?.user?.user);
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/recoverpassword"
        element={user ? <Navigate to="/" /> : <RecoverPassword />}
      />
      <Route
        path="/dashboard"
        element={
          user ? (
            user.isAdmin ? (
              <AdminProfile user={user} />
            ) : (
              <UserDash />
            )
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/dashboard/users"
        element={
          user ? user.isAdmin ? <Users /> : <UserDash /> : <Navigate to="/" />
        }
      />
      <Route
        path="/dashboard/users/user/:id"
        element={
          user ? (
            user.isAdmin ? (
              <AdminUser />
            ) : (
              <UserDash />
            )
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
