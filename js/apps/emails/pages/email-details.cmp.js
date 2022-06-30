import { emailService } from "../services/email.service.js"

export default {
    template: `
        <h1>Selected email</h1>
        <pre>{{email}}</pre>
        <span>From:</span>
        <span>Date:</span>
        
    `,
    props: [
        'email'
    ],
    data() {
        return {

        }
    },
    methods: {

    },

}