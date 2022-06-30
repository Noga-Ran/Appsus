export default {
    props:['note'],
    template: `
    <section v-if="note" class="keep-app-list-note" v-on:click.self="this.$emit('edit')">
        <div :style="{backgroundColor: setBg()}">
            <h3>{{getTitle()}}</h3>
            <!-- <p v-on:click.self="this.$emit('edit')">type: {{noteType}}</p> -->
            <p v-on:click.self="this.$emit('edit')">ispin: {{isPinned()}}</p>
            <p v-on:click.self="this.$emit('edit')" v-if="getNoteTxt()">info: {{getNoteTxt()}}</p>
            <img v-on:click.self="this.$emit('edit')" v-if="getUrl()" :src='getUrl()' alt="img not found">
            <ul v-if="noteToDos" v-for="todo in getsTodos()">
                <li>
                    <p @click="toggleToDo(todo,note)" v-if="todo.txt" v-bind:style= "[todo.doneAt ? {'text-decoration': 'line-through'} : {'text-decoration': none}]">{{todo.txt}}</p>
                    <p v-if="todo.doneAt">Done At: {{getDateDisplay(todo.doneAt)}}</p>
                </li>
            </ul>
            <p v-if="noteLabe">label: {{getLabels()}}</p>
        </div>
        <br><br>
    </section>
  `
  ,components:{
    
  },
    data() {
      return {
        }
    },
    methods: {
        getTitle(){
            var title = (this.note.info.title) ? this.note.info.title : 'no title'
            return title
        },
        setBg(){
            if('style' in this.note){
                if('backgroundColor' in this.note.style) return this.note.style.backgroundColor
            }
            return '#F7F0F5'
        },
        isPinned(){
            let isPin = (this.note.noteIsPinned) ? true : false
            return isPin
        },
        getNoteTxt(){
            let txt = (this.note.info.txt) ? this.note.info.txt : false
            return txt
        },
        getUrl(){
            let url = (this.note.info.url) ? this.note.info.url : false
            return url
        },
        getsTodos(){
            if('todos' in this.note.info){
                let todoInfo = []
                for(let todo in this.note.info.todos){
                    let txt = this.note.info.todos[todo].txt || null
                    var doneAt = this.note.info.todos[todo].doneAt || null
                    let index = todo
                    
                    todoInfo.push({txt, doneAt, index})
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
        toggleToDo(todo,note){
            if(todo.doneAt) {
                todo.doneAt = null
            }
            else {
                todo.doneAt = Date.now()
            }
            this.$emit('todoChange',note,todo)
        },
        getDateDisplay(timeStamp){
            return new Date(timeStamp)
        },
        getLables(){
            let labls = (this.note.info.label) ? this.note.info.label : false
            return labls
        }
    },
    computed: {
    },
  };
  