import notePreview from './note-preview.cmp.js'

export default {
    props: ["notes"],
    template: `
   <section class="keep-app-notes-list-container">
       <div v-for="(note) in notes" :key="note.id" class="keep-app-notes-list">
           <note-preview @todoChange="updateTodo" :note="note"/>
           <!-- <div class="keep-app-actions">
               <button @click="remove(book.id)">X</button>
               <router-link :to="'/books/'+book.id">Details</router-link>
           </div> -->
        </div>
    </section>
  `,
    components: {
        notePreview,
    },
  
    data() {
      return {};
    },
    methods: {
        updateTodo(noteId,todo){

            this.$emit('todo',noteId,todo)
        }
    },
    computed: {},
  };
  