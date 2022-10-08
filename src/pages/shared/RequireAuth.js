import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from "../../firebase.init";
import FullPageLoading from './FullPageLoading';

const RequirAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <FullPageLoading></FullPageLoading>
    }
    
    if(user){
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default RequirAuth;