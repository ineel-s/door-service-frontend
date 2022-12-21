import axios from "axios";
import store from '@/modules/store.index';
axios.interceptors.request.use(
    request=>{
        const token = store.state.auth.token;
        console.log(token);
        if(token){
            request.headers['Authorization']= token;
        }
        return request;
    },
    error => Promise.reject(error)
);