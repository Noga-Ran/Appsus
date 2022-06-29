import { noteService } from "../services/note.service.js";
import addNote from '../cmps/add-note.cmp.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
    template: `
    <div class="keep-app-main-page">
        <h1>google keep</h1>
        <add-note @add="saveNewNote"/>
        <note-list @todo="saveToDo" :notes="NotesToDisplay"/>
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
    methods:{
        saveToDo(note,todo){
            noteService.updateTodo(note, todo)
        },
        saveNewNote(newNote){
            noteService.addNewNote(newNote)
            this.notes.push(newNote)
        }
    },
    computed:{
        NotesToDisplay(){
            return this.notes
        },
    }
}
