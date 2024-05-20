import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import Register from './pages/Register';
function App() {
  const isLoggedIn = false;

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={isLoggedIn ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/recoverpassword"
        element={isLoggedIn ? <Navigate to="/" /> : <RecoverPassword />}
      />
    </Routes>
  );
}

export default App;
