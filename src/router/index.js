import Router from 'vue-router';
import UserLog from '@/components/pages/user-log/UserLog.vue';

const router = new Router({
    mode:'history',
    routes : [
        {
            name: 'home',
            path:'/',
            component:UserLog
        },
        {
            name: 'login',
            path:'/login',
            component: UserLog
        },
    ]
});
export default router;