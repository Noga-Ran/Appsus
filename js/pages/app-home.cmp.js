
export default {
    template: `
    <section class="home-page">
      <div class="home-desc">
        <h1>Meet Appsus</h1>
        <p>This new and game-changer app is Cupcake ipsum dolor sit amet wafer brownie cupcake jelly. Dragée jujubes tiramisu gummi bears cotton candy tiramisu pudding. Caramels donut donut halvah tiramisu bonbon tiramisu donut.</p>

        <img src="../../images/main-page/devices.png" alt="devices">
      </div>

        <h1>Shall We?</h1>
        <div class="home-links">
          <span @click="goToAbout" class="start">
            <p>About</p>
            <img src="../../images/main-page/people-group-solid.svg" alt="">
          </span>
          <span class="link-miss-keep" @click="goToKeep" class="start">
            <p>Miss Keep</p>
            <img src="../../images/main-page/map-pin-solid.svg" alt="">
          </span>
          <span @click="goToMail" class="start">
            <p>Mail</p>
            <img src="../../images/main-page/envelope-solid.svg" alt="">
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
    },
}
