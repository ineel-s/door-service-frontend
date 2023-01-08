import axios from 'axios';
import Config from '@/config'

const getAllService = async()=>{
    const response = await axios.get(`${Config.baseUrl}/service/scname/category`);
    console.log(response.data);
    return response.data
}

const registerService = async(ServiceDetails)=>{
        const response = await axios.post(`${Config.baseUrl}/service`,ServiceDetails,{
            headers:{
                'Accept':'multipart/form-data',
            }
        });
        console.log(response);
        return response;

}

const getprebookingService = async()=>{
    const response = await axios.get(`${Config.baseUrl}/service/booking/mounted`);
    console.log(response);
    return response.data;
}

export{
getAllService,
registerService,
getprebookingService
}