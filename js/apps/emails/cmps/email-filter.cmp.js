export default {
    template: `
        <section class="input-email-search">
            <input type="search" class="email-search" v-model="filterBy" @input="search" placeholder="Search">
            <label>
                Date
                <input type="radio" v-model="sortBy.date" >
            </label>
        </section>
    `,

    data() {
        return {
            filterBy: null,
            sortBy: {
                date: null,
                title: null,
            }
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.filterBy)
        },
    },
 
}