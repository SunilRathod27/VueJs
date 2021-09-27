import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/Home'
import login from './components/login'
import profile from './components/profile'

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'profile',
        path:'/profile',
        component:profile
    },
    {
        name:'login',
        path:'/login',
        component:login
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes 
});
export default router