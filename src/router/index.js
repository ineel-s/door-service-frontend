import Router from 'vue-router';
import UserLogin from '@/components/pages/user-log/UserLogin.vue';
import UserRegister from '@/components/pages/user-log/UserRegister.vue';
const router = new Router({
    mode:'history',
    routes : [
        {
            name: 'home',
            path:'/',
            component:UserLogin
        },
        {
            name: 'login',
            path:'/login',
            component: UserLogin
        },
        {
            name: 'register',
            path : '/register',
            component: UserRegister
        }
    ]
});
export default router;