import axios from 'axios';
import Config from '@/config';

const getBookings = async()=>{
    const response = await axios.get(`${Config.baseUrl}/bookingservice`
    );
return response.data;
};

const bookService = async (id , bookingdetails)=>{
    const response = await axios.post(`${Config.baseUrl}/bookingservice/${id}`, bookingdetails);
    console.log(response);
    return response;
};

const updateBooking = async (id, details)=>{
    const response = await axios.put(`${Config.baseUrl}/bookingservice/${id}`, details);
    console.log(response);
    return response
}

export {
    getBookings,
    bookService,
    updateBooking,
}