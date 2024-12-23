import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthorized, children, message}) => {
return isAuthorized ? children: <Navigate to="/accessdenied" replace state={{ message }}/>;
};

export default ProtectedRoute;