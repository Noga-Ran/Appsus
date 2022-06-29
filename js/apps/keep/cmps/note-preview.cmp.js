export default {
    props:['note'],
    template: `
    <section class="keep-app-list-note">
        <div :style="{backgroundColor: noteBG}">
            <h3>{{noteTitle}}</h3>
            <!-- <p>id: {{noteId}}</p> -->
            <!-- <p>type: {{noteType}}</p> -->
            <p>ispin: {{noteIsPinned}}</p>
            <p v-if="noteInfoTxt">info: {{noteInfoTxt}}</p>
            <img v-if="noteUrl" v-bind:src="noteUrl">
            <ul v-if="noteToDos" v-for="todo in noteToDos">
                <li>
                    <p @click="toggleToDo(todo)" v-if="todo.txt" v-bind:style= "[todo.doneAt ? {'text-decoration': 'line-through'} : {'text-decoration': none}]">{{todo.txt}}</p>
                    <p v-if="todo.doneAt">Done At: {{todo.doneAt}}</p>
                </li>
            </ul>
            <p v-if="noteLabe">label: {{noteLabel}}</p>
        </div>
        <br><br>
    </section>
    <!-- <div class="keep-app-note-list">

    </div> -->
  `
  ,components:{
    
  },
    data() {
      return {
            noteId: this.note.id,
            noteType: (this.note.type) ?  this.note.type : 'note-txt',
            noteIsPinned: (this.note.noteIsPinned) ? this.note.noteIsPinned : false,
            noteInfoTxt: (this.note.info.txt) ? this.note.info.txt : false,
            noteTitle: (this.note.info.title) ? this.note.info.title : 'no title',
            noteUrl: (this.note.info.url) ? this.note.info.url : false,
            noteBG: this.setBg(),
            noteLabel: (this.note.info.label) ? this.note.info.label : false,
            noteToDos: this.getsTodos(),
        }
    },
    methods: {
        NoteEdit(){
            if(!this.userInput) return
            //console.log(this.userInput, this.isNote, this.isImage, this.isVideo,this.isToDo);
            //todo: save note, rendere notes
        },
        setBg(){

            if('style' in this.note){
                if('backgroundColor' in this.note.style) return this.note.style.backgroundColor
            }
            return '#F7F0F5'
        },
        getsTodos(){
            if('todos' in this.note.info){
                let todoInfo = []
                for(let todo in this.note.info.todos){
                    let txt = this.note.info.todos[todo].txt || null
                    let doneAt = this.note.info.todos[todo].doneAt || null
                    todoInfo.push({txt, doneAt})
                }
                return todoInfo
            }
            return false
        },
        getStyle(){
            return {
                bgColor: this.noteBG,
            }
        },
        toggleToDo(todo){
            console.log(todo.doneAt);
            if(todo.doneAt) todo.doneAt = null
            else todo.doneAt = Date.now()
        }
    },
    created(){
    },
    computed: {},
  };
  