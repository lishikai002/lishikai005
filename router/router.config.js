import overall from '../src/pages/overall.vue'
import college from '../src/pages/Colleges.vue'
import major from '../src/pages/major.vue'
var routers = [
    {
        path:'/',
        redirect:'/overall'
    },
    {
        name:'overall',
        path:'/overall',
        component:overall
    },
    {
        name:'college',
        path:'/college',
        component:college
    },
    {
        name:'major',
        path:'/major',
        component:major
    }
]
export default routers;