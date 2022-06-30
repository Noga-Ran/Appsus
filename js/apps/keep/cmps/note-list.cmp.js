import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
   <section class="keep-app-notes-list-container">
       <div v-for="(note) in notes" :key="note.id" class="keep-app-notes-list" :class="{'keep-app-list-note': note.isPinned===false, 'keep-app-list-pinned-note': note.isPinned===true}">
           <note-preview @todoChange="updateTodo" :note="note" @edit="editNote(note)"/>
           <button @click="remove(note.id)">X</button>
           <button @click="editNote(note)">Edit</button>
           <button @click="togglePin(note)">Pin</button>
           <!-- <note-preview v-if="editNote" @todoChange="updateTodo" :note="note"/> -->
           <!-- <div class="keep-app-actions">
           </div> -->
        </div>
    </section>
  `,
    components: {
        notePreview,
    },
  
    data() {
      return {
        
      };
    },
    methods: {
        updateTodo(note,todo){

            this.$emit('todo',note,todo)
        },
        remove(noteId) {
            this.$emit("remove", noteId);
        },
        editNote(note){
            this.$emit('edit',note);
        },
        togglePin(note){
            this.$emit('togglePin',note)
        }
    },
    computed: {},
    created() {
        console.log(this.notes,'      !')
    },
  };
  