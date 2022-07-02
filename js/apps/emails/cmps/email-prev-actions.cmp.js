export default {
    template: `
            <button class="delete-email" @click.stop="select">
                <i class="fa-solid fa-trash"></i>
            </button>
        <!-- <section class="email-prev-actions">
        </section> -->
    `,
    props: [
        'emailId'
    ],
    data() {
        return {}
    },
    methods: {
        select() {
            this.$emit('selectedDel', this.emailId)
        },
    },

}
