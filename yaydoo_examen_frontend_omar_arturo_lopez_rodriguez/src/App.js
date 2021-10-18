//Librerías
import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import PublicRoute from "./components/common/PublicRoute";
import Login from "./components/login";
import Routes from "./Routes";
//Componentes
const App = () => {
   return (
      <Router>
         <Switch>
            <PublicRoute restricted={true} component={Login} path="/" exact />
            <PublicRoute restricted={true} component={Login} path="/login" exact />

            <Routes />
            <Redirect from="*" to="/" />
         </Switch>
      </Router>
   );
};

export default App;
