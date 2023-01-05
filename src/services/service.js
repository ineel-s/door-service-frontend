import axios from 'axios';
import Config from '@/config'

const getAllService = async()=>{
    const response = await axios.get(`${Config.baseUrl}/service/scname/category`);
    console.log(response.data);
    return response.data
}

export{
getAllService
}