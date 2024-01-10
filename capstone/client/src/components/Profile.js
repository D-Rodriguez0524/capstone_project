import React, { useContext } from "react";
import UserContext from "../useContext";

const Profile = () => {
  const userData = useContext(UserContext);
  return <p>{userData.currentUser}</p>;
};

export default Profile;
