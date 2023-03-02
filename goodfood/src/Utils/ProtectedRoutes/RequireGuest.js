import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UseAuth from '../UseAuth';

const RequireGuest = () => {
  const { isLoggedIn } = UseAuth();
  const location = useLocation();

  return (
    isLoggedIn
    ? 
     <Navigate to="/" state={{from:location}} replace />
    : 
    <Outlet />   
    )
};

export default RequireGuest;