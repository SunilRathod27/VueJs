import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Pagenotfound from './components/Pagenotfound.vue'
const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'Profile',
        path:'/Profile/:name',
        component:Profile
    },
    {
        name:'Login',
        path:'/Login',
        component:Login
    },
    {
        name:'notfound',
        path:'/:pathMatch(.*)*',
        component:Pagenotfound
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes 
});
export default router