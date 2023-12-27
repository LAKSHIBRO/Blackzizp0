import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import AdminRoute from "./Routes/Admin/AdminRoute";

function App() {
  const loginRoleType = "admin";

  return (
    <BrowserRouter>
      <AppRoutes />
      {/* <AdminRoute />- */}

      {/* {
          loginRoleType === "user" 
          ? 
            <AppRoutes /> 
          : 
        } */}
    </BrowserRouter>
  );
}

export default App;
