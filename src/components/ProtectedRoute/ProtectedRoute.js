import React, {useState, useEffect} from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  
  useEffect(() => {
    console.log(props);
}, []);

  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
)}

export default ProtectedRoute;