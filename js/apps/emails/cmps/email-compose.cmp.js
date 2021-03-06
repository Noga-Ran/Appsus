export default {
    template: `
        <form class="compose-email">
            <h3 class="new-msg">New Message</h3>
            <div class="email-inputs">
            <p>
                <span>From</span>
                <span>{{user}}</span>
            </p>
            <p>
                <span>To</span>
                <input type="email" id="email" required>
            </p>
            <p>
                <span>Subject</span>
                <input type="text" v-model="newEmail.subject">
            </p>
            <p>
                <textarea v-model="newEmail.body"></textarea>
            </p>
            <button class="email-btn-send" @click.prevent="send">Send</button>
        </div>
        </form>
    `,

    data() {
        return {
            user: ' momo@momo.com',
            newEmail: {
                to: null,
                subject: null,
                body: null,
                sentAt: null,
                state: null,
            },
        }
    },
    methods: {
        send() {
            this.newEmail.state = 'sent'
            this.newEmail.sentAt = Date.now()
            this.$emit('newEmail', this.newEmail)
        },
    },

}