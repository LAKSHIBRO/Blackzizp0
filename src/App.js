import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import AdminRoute from "./Routes/Admin/AdminRoute";

function App() {
  const loginRoleType = "admin";

  return (
    <BrowserRouter>
      <AppRoutes />

      {/* {
          loginRoleType === "user" 
          ? 
            <AppRoutes /> 
          : 
            <AdminRoute />-
        } */}
    </BrowserRouter>
  );
}

export default App;
