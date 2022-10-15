import React, { useContext } from 'react';
import { AppContext } from '../../App';
import NotFoundPage from './NotFoundPage';

const RequireNonAdmin = ({children}) => {
    const {data} = useContext(AppContext);
    const admin = data?.doc?.role === "admin";
    if(!admin){
        return children;
    }
    return <NotFoundPage></NotFoundPage>
};

export default RequireNonAdmin;