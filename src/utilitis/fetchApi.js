async function fetchApi(path, method = "GET", body = null){


    try{
        const response = await fetch(import.meta.env.VITE_API_URL + path, {
            method,
            headers: {
                "Content-type": body instanceof FormData ? null : "application/json",
                "Authorization": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : null,
            },
            body: body ? JSON.stringify(body) : null,

        });
    
    
        const data = await response.json()

        if(!response.ok){

            throw new Error(data.message ?? "qualcosa è andato storto")

        }
    
        return data
    } catch(err) {
        throw err;
    }

}

export default fetchApi;