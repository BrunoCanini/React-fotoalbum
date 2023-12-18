import { useContext, createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import fetchApi from "../utilitis/fetchApi";


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const navigate = useNavigate();

    async function handleLogin(payload){
        const data = await fetchApi("/login", "POST", payload)
        setIsLoggedIn(true);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/dashboard")
    }

    async function handleRegister(payload){
        const data = await fetchApi("/register", "POST", payload)
        setIsLoggedIn(true);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/dashboard")
    }
// --------------------------------------------------------------
    function handleLogout(){
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token){
            setIsLoggedIn(true)
            fetchLoggerUser()
        }


    },[])

    async function fetchLoggerUser(){

        const {user} = await fetchApi("/me" )
        setUser(user);

    }

    return (
        <AuthContext.Provider value={{user, isLoggedIn, handleLogin, handleRegister, handleLogout}} >

            { children }

        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}