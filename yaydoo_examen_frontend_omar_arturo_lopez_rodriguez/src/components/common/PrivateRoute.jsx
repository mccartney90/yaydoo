import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../../middleware/Authentication";

const PrivateRoute = ({ component: Component, ...rest }) => {
   // console.log("Private route: ", isLogin());
   return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page

      <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/" />)} />
   );
};

export default PrivateRoute;
