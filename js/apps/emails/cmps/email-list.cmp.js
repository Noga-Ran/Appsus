import emailPreview from "./email-preview.cmp.js"

export default {
    props: [
        'emails'
    ],
    template: `
        <section v-for="email in emails">
            <email-preview @click.native="select(email)" :email="email" />
        </section>
    `,
    data() {
        return {
        }
    },
    methods: {
        select(email) {
            this.$emit('selected', email)
        },
    },

    components: {
        emailPreview,
    },
    emits: [
        'selected',
    ],
}