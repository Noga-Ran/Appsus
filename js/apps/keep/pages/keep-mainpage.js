import { noteService } from "../services/note.service.js";
import addNote from '../cmps/add-note.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import editNote from '../cmps/edit-note.cmp.js'

export default {
    template: `
    <div class="keep-app-main-page">
        <h1>google keep</h1>
        <add-note  @add="saveNewNote"/>
        <note-list @remove="removeNote" @todo="saveToDo" @edit="sendToEdit" :notes="notes"/>
        <edit-note v-if="noteToEdit" @saveEdit="updateNote" :noteEdit="noteToEdit"/>
    </div>
    `,
    components:{
        addNote,
        noteList,
        editNote,
    },
    data() {
        return {
            notes: null,
            noteToEdit: null
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
        },
        removeNote(noteId){
            noteService.remove(noteId);
            const idx = this.notes.findIndex((note) => note.id === noteId);
            this.notes.splice(idx, 1);
        // eventBus.emit('show-msg', { txt: 'Book has been deleted', type: 'success' });
        },
        sendToEdit(note){
            this.noteToEdit = note
        },
        updateNote(editNote){
            const idx = this.notes.findIndex((note) => note.id === editNote.id);
            this.notes.splice(idx, 1, editNote);
            noteService.updateNote(editNote)        
            this.noteToEdit = null
            // console.log(this.notes,' testing');
        },
    },
    // computed:{
    //     NotesToDisplay(){
    //         console.log(this.notes, 'display notes');
    //         return this.notes
    //     },
    // }
}
