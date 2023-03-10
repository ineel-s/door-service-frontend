import axios from "axios";
import Config from "@/config";

const getCategoryByID = async(id)=>{
    const response = await axios.get(`${Config.baseUrl}/category/${id}`);

    return response.data
}

const getAllCategory = async()=>{
    const response = await axios.get(`${Config.baseUrl}/category`);
    return response.data
}

export{
    getCategoryByID,
    getAllCategory
}