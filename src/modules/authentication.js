import {loginUser} from '@/services/user.service';

const Token = 'token';
const Email ='email';
const Name = 'name';
const Role = 'role';
const Id = 'id';
const Gender='gender';
const PhoneNumber='phoneNumber';
const Address='address';


const auth={
    state:{
        token: localStorage.getItem(Token) || '',
        email: localStorage.getItem(Email) || '',
        name: localStorage.getItem(Name) || '',
        role: localStorage.getItem(Role) || '',
        id: localStorage.getItem(Id) || '',
        gender: localStorage.getItem(Gender) || '',
        phoneNumber: localStorage.getItem(PhoneNumber) || '',
        address: localStorage.getItem(Address) || ''
    },
    getters:{
        isAuthenticated(state){
            return state.token !=='';
        },
        userEmail(state){
            return state.email;
        }
    },
    mutations:{
        setToken(state,token){
            state.token=token;
        },
        setEmail(state,email){
            state.email=email;
        },
        setName(state,name){
            state.name=name;
        },
        setRole(state,role){
            state.role=role;
        },
        setId(state,id){
            state.id=id;
        },
        setgender(state,gender){
            state.gender=gender;
        },
        setphoneNumber(state,phoneNumber){
            state.phoneNumber=phoneNumber;
        },
        setaddress(state,address){
            state.address=address;
        }
    },
    actions:{
        async loginUser( {commit}, credentials){
            const data = await loginUser(credentials);
            console.log(data);
            const {token, email, name, role, id,gender,address,phoneNumber} = data;
            localStorage.setItem(Token, token);
            localStorage.setItem(Email, email);
            localStorage.setItem(Name, name);
            localStorage.setItem(Role, role);
            localStorage.setItem(Id, id);
            localStorage.setItem(Gender, gender);
            localStorage.setItem(PhoneNumber, phoneNumber);
            localStorage.setItem(Address, address);

            commit('setToken',token);
            commit('setEmail',email);
            commit('setName', name);
            commit('setRole',role);
            commit('setId',id);
            commit('setgender',gender);
            commit('setphoneNumber',phoneNumber);
            commit('setaddress',address);
            return true;
        },
        logoutUser({commit}){
            commit('setToken','');
            commit('setEmail','');
            commit('setName', '');
            commit('setRole','');
            commit('setId','');
            commit('setgender','');
            commit('setphoneNumber','');
            commit('setaddress','');
            localStorage.removeItem(Token);
            localStorage.removeItem(Email);
            localStorage.removeItem(Name);
            localStorage.removeItem(Role);
            localStorage.removeItem(Id);
            localStorage.removeItem(Gender);
            localStorage.removeItem(PhoneNumber);
            localStorage.removeItem(Address);
            
        },
        
    }
}

export default auth;