import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './../Pages/providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading) {
        return <progress className="w-56 progress"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;