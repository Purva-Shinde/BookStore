import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../StoreComponent/SliceFolder/AuthSlice"; // Adjust the path based on your project structure

const ProtectedRoute = ({ children }) => {
  const authUser = useSelector(selectAuthUser);

  if (!authUser) {
     return <Navigate to="/Signup" />;
  }
    return children;
};
export default ProtectedRoute;
