import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
    // console.log('isLoggedIn: в протектед роут', isLoggedIn);
    return isLoggedIn ? children : <Navigate to='/movies' />
}


export default ProtectedRoute;