export default {
    template: `
    <section class="home-page">
      <div class="headings">
        <h1>Welcome to AppSus</h1>
        <!-- <img src="img/home-page.jpg" class=img-homepage alt=""> -->
        <button @click="goToBooks" class="start">Start</button>
      </div>
   </section>
  `,
    methods: {
        goToBooks() {
            this.$router.push('/book')
        },
    },
}
