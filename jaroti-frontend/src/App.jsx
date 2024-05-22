import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDash from './pages/AdminDashBoard/AdminDash';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import Register from './pages/Register';
import UserDash from './pages/userDashBoard/UserDash';
function App() {
  const user = useSelector(state => state.user.user);
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
              <AdminDash />
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
