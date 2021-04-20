import { useReactiveVar } from "@apollo/client";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import { isLoggedInVar } from "./apollo";
import { path } from "./Routes";

export default () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Router>
      <Switch>
        <Route exact path={path.home}>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
      </Switch>

      {!isLoggedIn && (
        <Route path={path.signUp}>
          <SignUp />
        </Route>
      )}
    </Router>
  );
};
