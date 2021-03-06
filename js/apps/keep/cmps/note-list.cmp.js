import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
   <section class="keep-app-notes-list-container">
       <div v-for="(note) in notes" :key="note.id" class="keep-app-notes-list"
       :class="{'keep-note-pin': note.isPinned, 'keep-note-not-pin': !note.isPinned}"
       :style="{backgroundColor: setBg(note)}">

            <note-preview @todoChange="updateTodo" @todoDel="deleteTodo" :note="note" @edit="editNote(note)"/>
            <span class="keep-list-note-options">
                <button title="delete" @click="remove(note.id)">🗑️</button>
                <button title="edit" @click="editNote(note)">📝</button>
                <button title="duplicae note" @click="dupNote(note)">📑</button>
                <button :title="getTitle(note)" :class="{pinned: note.isPinned,'not-pinned': !note.isPinned}" @click="togglePin(note)">📌</button>
            </span>

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
        deleteTodo(note,todo){
            this.$emit('delTodo',note,todo)
        },
        remove(noteId) {
            this.$emit("remove", noteId);
        },
        editNote(note){
            this.$emit('edit',note);
        },
        togglePin(note){
            this.$emit('togglePin',note)
        },
        getTitle(note){
            if('isPinned' in note === undefined) return 'pin'
            else {
                if(note.isPinned) return 'unpin'
                else return 'pin'
            }
        },
        setBg(note){
            if('style' in note){
                if('backgroundColor' in note.style) return note.style.backgroundColor
            }
            return '#F7F0F5'
        },
        dupNote(note){
            this.$emit('dup',note);
        }
    },
    computed: {
    },
    created() {
       
    },
  };
  