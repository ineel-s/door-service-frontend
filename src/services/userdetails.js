import axios  from "axios";
import Config  from "@/config";

const getUserDetails = async(id)=>{
    const response = await axios.get(`${Config.baseUrl}/user/${id}`);
    console.log(response.data.data);
    return response.data.data.data;
}

const getAllUsers = async()=>{
    const response = await axios.get(`${Config.baseUrl}/user`);
    
    return response.data;
}

export{
    getUserDetails,
    getAllUsers
}