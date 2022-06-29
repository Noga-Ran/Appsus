export default {
    template: `
    <section class="home-page">
      <div class="headings">
        <h1>Welcome to AppSus</h1>
        <!-- <img src="img/home-page.jpg" class=img-homepage alt=""> -->
        <button @click="goToAbout" class="start">about</button>
        <button @click="goToKeep" class="start">keep</button>
        <button @click="goToMail" class="start">mail</button>
      </div>
   </section>
  `,
    methods: {
        goToAbout() {
          this.$router.push('/about')
        },
        goToKeep() {
            this.$router.push('/keep')
        },
        goToMail() {
          this.$router.push('/mail')
      },
    },
}
