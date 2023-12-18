import { useAuth } from "../context/AuthContext"


export default function TheNav(){

    const {isLoggedIn} = useAuth();
    const {handleLogout} = useAuth();


    return(
        <div className=" w-full h-[70px] flex items-center justify-around shadow">
            <div>
                <img className="w-[130px] h-[50px]" src="/src\assets\creative-camera-magazine-logo-159CCCD2D8-seeklogo.com.png" alt="" />
            </div>
            <div className="flex gap-5">
                <a href="/">Home</a>
                {!isLoggedIn && ( <>
                
                <a className="" href="/login">Login</a>
                <a className="" href="/register">Register</a> </>)}
                {isLoggedIn && (<><a className="" href="/dashboard">Dashboard</a> <a className="" href="/" onClick={handleLogout}>Logout</a>
</>)}
            </div>
        </div>
    )
}