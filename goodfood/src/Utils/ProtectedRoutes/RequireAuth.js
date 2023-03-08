
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import UseAuth from '../UseAuth';

const RequireAuth = () => {
  const { verifiedUser } = UseAuth();
  const isLoggedIn =  verifiedUser()

  const location = useLocation()

  
  return (
    isLoggedIn
    ? <Outlet /> 
    : <Navigate to="/login" state={{from:location}} replace/>
    );
}

export default RequireAuth;