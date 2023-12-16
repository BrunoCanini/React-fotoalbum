import { useState, useEffect } from "react";

export default function PublicPhoto(){

    const [photos, setPhotos] = useState([])

    async function callPhotos(){
        const data = await (await fetch("http://localhost:3000/photo?visible=true")).json()
        setPhotos(data)
    }

    useEffect(() => {
        callPhotos()
    }, [])


    return(
        <div className="flex justify-center gap-4 mt-10">
            
            {photos.map((photo) =>(

                <div key={photo.id} className="w-[600px] p-5 shadow bg-white">
                    <div className="">
                        <img src={photo.image} alt="" />
                        {/* <img src="https://cdn.shopify.com/s/files/1/0594/4639/5086/files/Creating_a_Photography_Logo_-_Everything_You_Need_To_Know_3d0c05bc-7b52-435d-bb7c-dfe9ba1a18d2.jpg?v=1692105642" alt="" /> */}
                    </div>
                    <h1 className="text-center pt-5 font-bold font-mono">{photo.title}</h1>
                    <a href={`photo/${photo.id}`} className="uppercase p-3 bg-yellow-500 w-fit text-white">More info</a>
                </div>

            ))}

        </div>
    )
}