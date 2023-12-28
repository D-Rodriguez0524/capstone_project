// import React, { Component, useContext, useEffect, useState } from "react";
// import UserContext from "../useContext";

// const PrivateRoute = ({ children, path }) => {
//     const [userAuth, setUserAuth] = useState(false);
//     const userData = useContext(UserContext);

//     useEffect(() => {
//         if (userData.currUser) {
//             setUserAuth(true);
//         }
//     }, [userData.currUser])

//     return (
//         <Route exact path={path}>
//             {/* {children} */}
//         </Route>
//     )
// }

// export default PrivateRoute;