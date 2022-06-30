import homePage from './pages/app-home.cmp.js'
import aboutPage from './pages/app-about.cmp.js'
import keepMainPage from './apps/keep/pages/keep-mainpage.js'
import emailApp from './apps/emails/pages/email-app.cmp.js'
import addNote from "./apps/keep/cmps/add-note.cmp.js"
import emailDetails from "./apps/emails/pages/email-details.cmp.js"

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
        component: keepMainPage,
    },
    {
        path: '/keep/add-note',
        component: addNote,
    },
    {
        path: "/email",
        component: emailApp,

    },
    {
        path: "/email/:emailId",
        component: emailDetails
    }
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})