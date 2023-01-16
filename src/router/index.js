import Router from 'vue-router';
import UserLog from '@/components/pages/user-log/UserLog.vue';
import HomePage from '@/components/pages/HomePage.vue'
import BookingDetails from '@/components/pages/users-page/BookingDetails.vue';
import BookingStatus from '@/components/pages/users-page/BookingStatus.vue';
import AddService from '@/components/pages/users-page/AddService.vue';
import UserProfile from '@/components/pages/UserProfile.vue';
import UserDetails from '../components/pages/users-page/UserDetails.vue';
import ServiceDetaile from '@/components/pages/ServiceDetaile.vue';
import SingleUser from '@/components/pages/users-page/SingleUser.vue';
import BookService from '@/components/pages/BookService.vue';
import ProviderAssigned from '@/components/pages/ProviderAssigned.vue';
import StripePayment from '@/components/pages/StripePayment.vue'

const meta = {
    authorize: [ 'admin', 'customer' ,'provider']
};

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
            name: 'booking-status',
            path: '/bookingstatus',
            component: BookingStatus,
            meta
        },
        {
            name: 'provider',
            path: '/addservice',
            component: AddService,
            meta :{ 
                authorize:['admin', 'provider']
            }
        },
        {
            name:'profile',
            path:'/profile',
            component:UserProfile,
            meta
        },
        {
            name:'userdetails',
            path:'/userdetails',
            component:UserDetails,
            meta:{
                authorize:['admin']
            }
        },
        {
            name:'single-user',
            path:'/userdetails/:id',
            component:SingleUser,
            meta
        },
        {
            name:'bookings',
            path:'/bookings',
            component:BookingDetails,
            meta:{
                authorize:['admin']
            }
        },
        {
            name: 'ServiceDetail',
            path:'/services',
            component: ServiceDetaile
        },
        {
            name:'bookservice',
            path:'/bookservice/:id',
            component:BookService,
            meta
        },
        {
            name:'providerassigned',
            path:'/serviceassigned',
            component:ProviderAssigned,
            meta:{
                authorize:['admin','provider']
            }
        },
        {
            name:'stripepayment',
            path:'/payment',
            component:StripePayment
        }
    ]
});
export default router;