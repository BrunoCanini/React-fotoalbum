import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){

    const {isLoggedIn} = useAuth();
    console.log(isLoggedIn);

    if(isLoggedIn === null){
        return null
    }

    if(!isLoggedIn) return <Navigate to="/login"/>

    return children
}