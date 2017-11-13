import overall from '../src/pages/overall.vue'
var routers = [
    {
        name:'overall',
        path:'/overall',
        component:overall
    },
    {
        name:'college',
        path:'/college',
        component:{
            template:'<h1>高校</h1>'
        }
    },
    {
        name:'major',
        path:'/major',
        component:{
            template:'<h1>专业</h1>'
        }
    }
]
export default routers;