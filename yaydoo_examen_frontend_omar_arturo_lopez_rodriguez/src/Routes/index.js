import React from "react";
import { Switch } from "react-router-dom";
import Admin from "../components/admin";
import PrivateRoute from "../components/common/PrivateRoute";

const Routes = ({ location }) => {
   const prefix = "/app-web/";

   return (
      <>
         <Switch>
            <PrivateRoute component={Admin} path="/admin" exact />
         </Switch>
      </>
   );
};

export default Routes;
