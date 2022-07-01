export default {
    template: `
        <section>
            <input type="search" v-model="filterBy" @input="search">
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