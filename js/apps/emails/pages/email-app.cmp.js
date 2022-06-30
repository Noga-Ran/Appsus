import { emailService } from "../services/email.service.js"
import emailList from "../cmps/email-list.cmp.js"
import folderList from "../cmps/email-folder-list.js"
import emailFilter from "../cmps/email-filter.cmp.js"

export default {
    template: `
     <header>
            <email-filter @onSearch="email-filter"/>
        </header>
        <section>
            <email-list @selected="showEmail" :emails="emails"/>
        </section>
    `,
    data() {
        return {
            emails: emailService.query(),
            selectedEmail: null,
            filterBy: null,
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
        deleteEmail(emailId) {
            emailService.remove(emailId)
            const idx = this.emails.findIndex(email => email.id === emailId)
            this.emails.splice(idx, 1)
        },
        filter(txt) {
            this.filterBy = txt
        },
    },
   

    components: {
        emailList,
        folderList,
        emailFilter,
    },
}
