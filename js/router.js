import homePage from './pages/app-home.cmp.js'
import aboutPage from './pages/app-about.cmp.js'
import keepMainPage from './apps/keep/pages/keep-mainpage.js'
import emailApp from './apps/emails/pages/email-app.cmp.js'
import emailDetails from "./apps/emails/pages/email-details.cmp.js"
import bookApp from './apps/book/views/book-app.cmp.js';
import bookDetails from "./apps/book/views/book-details.cmp.js";

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
        path: "/email",
        component: emailApp,

    },
    {
        path: "/email/:emailId",
        component: emailDetails
    },
    {
        path: '/books',
        component: bookApp
    },
    {
        path: '/books/:bookId',
        component: bookDetails
    },
    // {
    //     path: "/books",
    //     component: emailDetails //change later
    // }
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})