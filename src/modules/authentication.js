import {loginUser} from '@/services/user.service';

const Token = 'token';
const Email ='email';
const Name = 'name';
const Role = 'role';

const auth={
    state:{
        token: localStorage.getItem(Token) || '',
        email: localStorage.getItem(Email) || '',
        name: localStorage.getItem(Name) || '',
        role: localStorage.getItem(Role) || ''
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
        }
    },
    actions:{
        async loginUser( {commit}, credentials){
            const data = await loginUser(credentials);
            console.log(data);
            const {token, email, name, role} = data;
            localStorage.setItem(Token, token);
            localStorage.setItem(Email, email);
            localStorage.setItem(Name, name);
            localStorage.setItem(Role, role);

            commit('setToken',token);
            commit('setEmail',email);
            commit('setName', name);
            commit('setRole',role);
            return true;
        },
        logoutUser({commit}){
            commit('setToken','');
            commit('setEmail','');
            commit('setName', '');
            commit('setRole','');
            localStorage.removeItem(Token);
            localStorage.removeItem(Email);
            localStorage.removeItem(Name);
            localStorage.removeItem(Role);
        },
        
    }
}

export default auth;