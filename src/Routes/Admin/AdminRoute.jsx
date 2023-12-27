import AdminDash from "./AdminDash";
import { Routes, Route } from "react-router-dom";

const AdminRoute = () => {

    return(

        <Routes>
            <Route path="/" element={<AdminDash/>}/>
        </Routes>
    );
    
}

export default AdminRoute;