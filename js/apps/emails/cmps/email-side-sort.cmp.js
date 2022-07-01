export default {
    template: `
        <button class="email-nav-btn" @click="sort('all')">Inbox</button>
        <button class="email-nav-btn" @click="sort('unread')">Starred</button>
        <button class="email-nav-btn" @click="sort('sent')">Sent Mail</button>
        <button class="email-nav-btn" @click="sort('drafts')">Drafts</button>
    `,
    data() {
        return {}
    },
    methods: {
        sort(type) {
            this.$emit('sort', type)
        },  
    },
   
    emits: [
        'sort'
    ]
}