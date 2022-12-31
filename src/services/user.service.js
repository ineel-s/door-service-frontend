import axios from "axios";
import Config from "@/config";

const baseUrl = Config.baseUrl;


const loginUser = async(credentials)=>{
    const response = await axios.post(`${baseUrl}/auth/login`,credentials,
    {
        headers:{
            'Content-Type':'application/json'
        },
    });
    console.log(response.data);
    return response.data;
}

export{
    loginUser
}