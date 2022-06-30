import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'
import { router } from './router.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
  template: `
        <section>
            <app-header />
            <user-msg/>
            <router-view/>
            <app-footer />
        </section>
    `,
  components: {
    appHeader,
    appFooter,
    userMsg
  },
}

const app = Vue.createApp(options)
app.use(router)
app.mount('#app')