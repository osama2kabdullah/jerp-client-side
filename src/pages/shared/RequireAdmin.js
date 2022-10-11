import React, { useContext } from 'react';
import { AppContext } from '../../App';
import NotFoundPage from './NotFoundPage';

const RequireAdmin = ({children}) => {
    const value = useContext(AppContext);
    const admin = value.doc.role === "admin";
    if(admin){
        return children;
    }
    return <NotFoundPage></NotFoundPage>
};

export default RequireAdmin;