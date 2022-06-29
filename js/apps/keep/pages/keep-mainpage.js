import { noteService } from "../services/note.service.js";
import addNote from '../cmps/add-note.cmp.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
    template: `
    <div class="keep-app-main-page">
        <h1>google keep</h1>
        <add-note/>
        <note-list :notes="NotesToDisplay"/>
    </div>
    `,
    components:{
        addNote,
        noteList,
    },
    data() {
        return {
            notes: null,
        }
    },
    created() {
        noteService.query().then(notes => this.notes = notes)
    },
    computed:{
        NotesToDisplay(){
            return this.notes
        }
    }
}
