import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
    console.log('isLoggedIn: в протектед роут', isLoggedIn); // Add this line to debug the isLoggedIn state
    // console.log('children:', children); // Add this line to debug the children prop
    return isLoggedIn ? children : <Navigate to='/movies' />
}


export default ProtectedRoute;