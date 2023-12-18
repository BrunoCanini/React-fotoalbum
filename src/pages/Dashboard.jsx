import { useAuth } from "../context/AuthContext"

export default function Dashboard(){

    const {user} = useAuth();

    if(user===null){
        return null
    }
    return(
        <div className="containerCustom mt-10">
            
            <h1 className="text-center font-bold uppercase">Welcome {user.name} {user.surname} </h1>
        
            <div className="flex justify-center gap-5">

                <div className="flex justify-center mt-10">
                    
                    <div className="w-[600px] p-5 shadow bg-white">
                        <div className="">
                            <img src="" alt="" />
                        </div>
                        <h1 className="text-center pt-5 font-bold font-mono">Create new Photo</h1>
                    </div>

                </div>

                <div className="flex justify-center mt-10">
                    
                    <div className="w-[600px] p-5 shadow bg-white">
                        <div className="">
                            <img src="" alt="" />
                        </div>
                        <h1 className="text-center pt-5 font-bold font-mono">Edit Photo</h1>
                    </div>

                </div>

            </div>
        
        </div>
    )
}