import {loginUser} from '@/services/user.service';

const Token = 'token';
const Email ='email';
const Name = 'name';
const Role = 'role';
const id = 'id';
const gender='gender'

const auth={
    state:{
        token: localStorage.getItem(Token) || '',
        email: localStorage.getItem(Email) || '',
        name: localStorage.getItem(Name) || '',
        role: localStorage.getItem(Role) || '',
        id: localStorage.getItem(id) || '',
        gender: localStorage.getItem(gender) || ''
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
        }
    },
    actions:{
        async loginUser( {commit}, credentials){
            const data = await loginUser(credentials);
            console.log(data);
            const {token, email, name, role, id} = data;
            localStorage.setItem(Token, token);
            localStorage.setItem(Email, email);
            localStorage.setItem(Name, name);
            localStorage.setItem(Role, role);
            localStorage.setItem(id, id);
            localStorage.setItem(gender, gender);

            commit('setToken',token);
            commit('setEmail',email);
            commit('setName', name);
            commit('setRole',role);
            commit('setId',id);
            commit('setId',gender);
            return true;
        },
        logoutUser({commit}){
            commit('setToken','');
            commit('setEmail','');
            commit('setName', '');
            commit('setRole','');
            commit('setId','');
            commit('setgender','');
            localStorage.removeItem(Token);
            localStorage.removeItem(Email);
            localStorage.removeItem(Name);
            localStorage.removeItem(Role);
            localStorage.removeItem(id);
            localStorage.removeItem(gender);
        },
        
    }
}

export default auth;