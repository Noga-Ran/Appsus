export default {
  template: `
    <header class="main-app-header">
      <div class="email-logo">
        <h3>AppSus</h3>
      </div>
      <nav class="email-nav-bar">
        <router-link to="/">Home</router-link>
        <router-link to="/email">Email</router-link>
        <router-link to="/keep">Keeps</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
   `,
  data() {
    return {
    }
  },
  methods: {},
  computed: {}
}