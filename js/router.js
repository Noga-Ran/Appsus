import homePage from './pages/app-home.cmp.js'
import aboutPage from './pages/app-about.cmp.js'
import keepMainPage from './apps/keep/pages/keep-mainpage.js'


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/keep',
        component: keepMainPage
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})