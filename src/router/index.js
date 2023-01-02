import Router from 'vue-router';
import UserLog from '@/components/pages/user-log/UserLog.vue';
import HomePage from '@/components/pages/HomePage.vue'
import AdminPage from '@/components/pages/users-page/AdminPage.vue';
import CustomerPage from '@/components/pages/users-page/CustomerPage.vue';
import ProviderPage from '@/components/pages/users-page/ProviderPage.vue';
import UserProfile from '@/components/pages/UserProfile.vue'
const router = new Router({
    mode:'history',
    routes : [
        {
            name: 'home',
            path:'/',
            component:HomePage
        },
        {
            name: 'homePage',
            path:'/home',
            component:HomePage
        },
        {
            name: 'login',
            path:'/login',
            component: UserLog
        },
        {
            name: 'admin',
            path:'/user-admin',
            component: AdminPage
        },
        {
            name: 'customer',
            path: '/user',
            component: CustomerPage
        },
        {
            name: 'provider',
            path: '/user-provider',
            component: ProviderPage
        },
        {
            name:'profile',
            path:'/profile',
            component:UserProfile
        }
    ]
});
export default router;