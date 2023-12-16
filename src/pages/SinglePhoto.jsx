import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function SinglePhoto(){

    const {id} = useParams();
    const [photo, setPhoto] = useState({})

    async function callPhoto(){
        const data = await (await fetch("http://localhost:3000/photo/" + id)).json()
        setPhoto(data)
    }

    useEffect(() =>{
        callPhoto()
    }, [])

    return (

        <div className="flex justify-center mt-10">
            
                <div className="w-[600px] p-5 shadow bg-white">
                    <div className="">
                        <img src={photo.image} alt="" />
                    </div>
                    <h1 className="text-center pt-5 font-bold font-mono">{photo.title}</h1>
                    <div>

                        <p className="my-4 text-center">{photo.description}</p>

                        <ul>
                            {photo.categories && photo.categories.map((category, i) => (
                            <li className="font-bold" key={i}>#{category.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

        </div>

      )
}