import axios from 'axios';
import Config from '@/config';
// import getUserDetails from './userdetails'

const user=[];
const provider=[];
const service=[];

const getBookings = async()=>{
    const response = await axios.get(`${Config.baseUrl}/bookingservice`
    );
// for(let i=0; i<response.data.bookings.length; i++){
//     const userid = response.data.bookings[i].userID;
//     console.log("user id", userid);
//     user.push(userid)
//     const providerid = response.data.bookings[i].providerID;
//     console.log("provider id", providerid);
//     provider.push(providerid)
//     const serviceid = response.data.bookings[i].serviceID;
//     console.log("Service id", serviceid);
//     service.push(serviceid)
// }

// for(let j=0;j<user.length ;j++){
//     try {
//         const userdetails = await getUserDetails(user[j]);
//         console.log("User details", userdetails);
//     } catch (error) {
//         return error.message;
//     }
// }

return response.data;
};
// console.log(user);

export {
    getBookings, user,provider,service
}