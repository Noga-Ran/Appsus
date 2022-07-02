
export default {
    template: `
    <section class="home-page">
      <div class="home-desc">
        <h1>Meet Appsus</h1>
        <p>This new and game-changer app is Cupcake ipsum dolor sit amet wafer brownie cupcake jelly.
          Dragée jujubes tiramisu gummi bears cotton candy tiramisu pudding. Caramels donut donut halvah tiramisu bonbon tiramisu donut.
        This new and game-changer app is Cupcake ipsum dolor sit amet wafer brownie cupcake jelly.
        Dragée jujubes tiramisu gummi bears cotton candy tiramisu pudding. Caramels donut donut halvah tiramisu bonbon tiramisu donut.</p>

        <img src="https://github.com/Noga-Ran/Appsus/blob/main/images/main-page/devices.png?raw=true" alt="devices">
      </div>

        <h1>Shall We?</h1>
        <div class="home-links">
          <span @click="goToAbout" class="start">
            <p>About</p>
            <img src="https://raw.githubusercontent.com/Noga-Ran/Appsus/536f8c10d62d7056a97525a0e2ad9f87777216f2/images/main-page/people-group-solid.svg" alt="">
          </span>
          <span class="link-miss-keep" @click="goToKeep" class="start">
            <p>Miss Keep</p>
            <img src="https://raw.githubusercontent.com/Noga-Ran/Appsus/536f8c10d62d7056a97525a0e2ad9f87777216f2/images/main-page/map-pin-solid.svg" alt="">
          </span>
          <span @click="goToMail" class="start">
            <p>Mister Mail</p>
            <img src="https://raw.githubusercontent.com/Noga-Ran/Appsus/91a1ce292a119b8b31498b62c64bac9256f5faae/images/main-page/envelope-solid.svg" alt="">
          </span>
          <span @click="goToBooks" class="start">
            <p>Miss Books</p>
            <img src="https://raw.githubusercontent.com/Noga-Ran/Appsus/536f8c10d62d7056a97525a0e2ad9f87777216f2/images/main-page/book-solid.svg" alt="">
          </span>
        </div>
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
          this.$router.push('/email')
      },
      goToBooks() {
        this.$router.push('/books')
      },
    },
}
