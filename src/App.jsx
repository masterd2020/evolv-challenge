import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import {useGlobalContext} from "./context/AppContext";

const AdminRoute = ({ children, ...rest }) => {
  const {state} = useGlobalContext();

  return (
    <Route
      {...rest}
      render={() =>
        state.user.isAdmin ? children : <Redirect to="/error" />
      }
    />
  );
};

export default function App() {
  return <Router>
    <Switch>
      <Route exact path="/" >
        <User />
      </Route>
      <AdminRoute exact path="/admin" >
        <Admin />
      </AdminRoute>
      <Route exact path="/login" >
        <Login />
      </Route>
      <Route exact path="/error" >
        <h2>404 Not Found</h2>
      </Route>
      <Route path="*" >
        <h2>Error page</h2>
      </Route>
    </Switch>
  </Router>;
}
