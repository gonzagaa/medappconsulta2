import React, { useContext } from "react";

import Loading from "../Pages/Utils/Loading";
import { AuthContext } from "../contexts/AuthContext";
import { UserRoutes } from "./user.route";
import { AuthRoutes } from "./auth.routes";

export default function Routes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  return user !== null ? <UserRoutes /> : <AuthRoutes />;
}
