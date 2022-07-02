export default {
  template: `
    <header class="main-app-header">
      <div class="main-app-logo">
        <img src="https://github.com/Noga-Ran/Appsus/blob/main/images/appsus/appsus-logo.png?raw=true" alt="AppSus">
      </div>
      <nav v-if="windowWidth>430" class="main-app-nav-bar">
        <router-link to="/">Home</router-link>
        <router-link to="/email">Email</router-link>
        <router-link to="/keep">Keeps</router-link>
        <router-link to="/books">books</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <p v-else @click="openModal=true" title="open menue">☰</p>
      <div v-if="openModal && windowWidth<430" id="myModal" class="main-header-modal">
          <div class="header-modal-content">
            <span @click="openModal=false" class="close-header-modal">&times;</span>
            <span>
              <router-link to="/" @click="openModal=false">Home</router-link>
              <router-link to="/email" @click="openModal=false">Email</router-link>
              <router-link to="/keep" @click="openModal=false">Keeps</router-link>
              <router-link to="/books" @click="openModal=false">books</router-link>
              <router-link to="/about" @click="openModal=false">About</router-link>
            </span>
          </div>
        </div>
    </header>
   `,
  data() {
    return {
      windowWidth: window.innerWidth,
      openModal:false,
    }
  },
  methods: {
    getWindowWidth(){
      this.windowWidth = window.innerWidth
    }
  },
  created(){
    window.addEventListener("resize", this.getWindowWidth);
  },
  computed: {}
}