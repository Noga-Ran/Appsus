import emailCompose from "./email-compose.cmp.js"
import emailSort from "./email-sort.cmp.js"

export default {
    template: `
        <section class="side-nav">
            <button class="email-compose" 
                @click="composeMode">
                +Compose
            </button>
            <email-side-sort @sort="setSort"/>
        </section>

        <section v-if="compose" >
            <email-compose @newEmail="sendEmail"/>
        </section>
    `,
    data() {
        return {
            compose: false,
            sortBy: null,
        }
    },
    methods: {
        showEmail(emailId) {
            this.$router.push(`/email/${emailId}`)
        },
        sendEmail(newEmail) {
            this.$emit('send', newEmail)
            this.compose = !this.compose
        },
        composeMode() {
            this.compose = !this.compose
        },
        setSort(type) {
            this.$emit('sort', type)
        },
    },
    emits: [
        'send',
        'sort',
    ],
    components: {
        emailCompose,
        emailSort
    },
}