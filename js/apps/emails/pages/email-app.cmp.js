import { emailService } from "../services/email.service.js"
import emailList from "../cmps/email-list.cmp.js"

export default {
    template: `
        <section>
            <email-list @selected="showEmail" :emails="emails"/>
        </section>
    `,
    data() {
        return {
            emails: emailService.query(),
            selectedEmail: null
        }
    },
    methods: {
        showEmail(emailId) {
            this.$router.push(`/email/${emailId}`)
            console.log(emailId, 'emailId')
        },
        sendEmail(email) {
            emailService.save(email)
                .then(email => this.emails.push(email))
        },
    },
    components: {
        emailList,
    },
}