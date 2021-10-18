import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../../middleware/Authentication";
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
   console.log(isLogin());
   debugger;
   return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route
         {...rest}
         render={(props) => (isLogin() && restricted ? <Redirect to={`/admin`} /> : <Component {...props} />)}
      />
   );
};

export default PublicRoute;
