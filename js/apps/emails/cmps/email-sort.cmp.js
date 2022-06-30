export default {
    template: `
        <button class="nav-btn" @click="sort('all')">Inbox</button>
        <button class="nav-btn" @click="sort('trash')">Starred</button>
        <button class="nav-btn" @click="sort('sent')">Sent Mail</button>
        <button class="nav-btn" @click="sort('drafts')">Drafts</button>
    `,
    data() {
        return {}
    },
    methods: {
        sort(type) {
            this.$emit('sort', type)
        },
    },

}