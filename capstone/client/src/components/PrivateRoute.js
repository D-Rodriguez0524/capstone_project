import React, { useContext } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "../useContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PrivateRoute = ({ exact, children, path }) => {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  console.debug(
    "PrivateRoute",
    "exact=",
    exact,
    "path=",
    path,
    "currentUser=",
    currentUser
  );

  if (!currentUser) {
    history.push("/");
  }

  return (
    <Route exact path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
