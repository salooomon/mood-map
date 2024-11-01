import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../core/store/store.ts";
import {Navigate, Outlet} from "react-router";

const ProtectedRoute: React.FC = () => {

   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

   return isAuthenticated ? <Outlet /> : <Navigate to="login" />
}

export default ProtectedRoute;