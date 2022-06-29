import addNote from '../cmps/add-note.cmp.js'

export default {
    template: `
    <div class="keep-app-main-page">
        <h1>google keep</h1>
        <add-note/>
    </div>
    `,
    components:{
        addNote,
    },
}
