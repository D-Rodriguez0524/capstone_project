import React, { useContext } from "react";
import "../HomePage.css";
import UserContext from "../useContext";

const HomePage = () => {
  const { currUser } = useContext(UserContext);
  return (
    <div className="HomePage">{currUser ? <h1>Welcome back!</h1> : <></>}</div>
  );
};

export default HomePage;
