import { noteService } from "../services/note.service.js"
import addNote from '../cmps/add-note.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import editNote from '../cmps/edit-note.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

export default {
    template: `
    <div class="keep-app-main-page">
        <h1>Miss keep</h1>
        <note-filter @filtered="filterNote"/>
        <add-note  @add="saveNewNote"/>
        <note-list @remove="removeNote" @todo="saveToDo" @edit="sendToEdit" @togglePin="changeNotePin" :notes='notesToDisplay'/>
        <edit-note v-if="noteToEdit" @saveEdit="updateNote" :noteEdit="noteToEdit"/>
    </div>
    `,
    components:{
        addNote,
        noteList,
        editNote,
        noteFilter,
    },
    data() {
        return {
            notes: null,
            noteToEdit: null,
            filterBy: null,
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
        },
        filterNote(filterBy) {
            this.filterBy = filterBy;
        },
        changeNotePin(note){
            console.log(note.isPinned)
            note.isPinned = !note.isPinned
            console.log(note.isPinned)
        }
    },
    computed:{
        notesToDisplay(){
            if(!this.filterBy || (this.filterBy.type==='' && this.filterBy.title==='')) return this.notes
    
            var filterNotes = []
            console.log(this.filterBy.title,this.filterBy.type);
            // return this.notes

            if(this.filterBy.title && this.filterBy.title!==''){
                console.log(this.notes[0],'notes');
                const regex = new RegExp(this.filterBy.title, "i");
                filterNotes = this.notes.filter((note) => regex.test(note.info.title))
            }
           
            if(this.filterBy.type && this.filterBy.type!==''){
                if(filterNotes.length) filterNotes = filterNotes.filter(note => note.type === this.filterBy.type)
                else if(!this.filterBy.title || this.filterBy.title==='') filterNotes = this.notes.filter(note => note.type === this.filterBy.type)
            }
            console.log(filterNotes, 'filtered notes');

            return filterNotes
        },
    }
}
