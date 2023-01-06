import Router from 'vue-router';
import UserLog from '@/components/pages/user-log/UserLog.vue';
import HomePage from '@/components/pages/HomePage.vue'
import BookingDetails from '@/components/pages/users-page/BookingDetails.vue';
import CustomerPage from '@/components/pages/users-page/CustomerPage.vue';
import ProviderPage from '@/components/pages/users-page/ProviderPage.vue';
import UserProfile from '@/components/pages/UserProfile.vue';
import UserDetails from '../components/pages/users-page/UserDetails.vue';
import ServiceDetaile from '@/components/pages/ServiceDetaile.vue';
import SingleUser from '@/components/pages/users-page/SingleUser.vue'
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
            name: 'customer',
            path: '/bookservice',
            component: CustomerPage
        },
        {
            name: 'provider',
            path: '/addservice',
            component: ProviderPage
        },
        {
            name:'profile',
            path:'/profile',
            component:UserProfile
        },
        {
            name:'userdetails',
            path:'/userdetails',
            component:UserDetails
        },
        {
            name:'single-user',
            path:'/userdetails/:id',
            component:SingleUser
        },
        {
            name:'bookings',
            path:'/bookings',
            component:BookingDetails
        },
        {
            name: 'ServiceDetail',
            path:'/services',
            component: ServiceDetaile
        }
    ]
});
export default router;