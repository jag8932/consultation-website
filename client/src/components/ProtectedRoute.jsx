import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({children, message}) => {
const [isAuthorized, setIsAuthorized] = useState(null);

useEffect(()=> {
    fetch("/checkAuth").then(response => response.json()).then(data => {
        setIsAuthorized(data.isAuthorized);
  
    }).catch(error => {
        console.error("Error checking authorization status:", error);
        setIsAuthorized(false);
    });
}, []);
if (isAuthorized === null) {
    return <div>Loading...</div>;
  }
return isAuthorized ? children: <Navigate to="/accessdenied" replace state={{ message }}/>;
};

export default ProtectedRoute;