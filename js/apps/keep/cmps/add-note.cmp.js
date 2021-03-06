export default {
    template: `
    <div class="keep-app-add-note">
        <input @click="isEdit=true" v-if="!isToDo" type="text" v-model="userInput" ref="ph" v-bind:placeholder="placeHolderMsg">
        <textarea @click="isEdit=true" v-else v-bind:placeholder="placeHolderMsg" ref="ph" type="text" v-model="userInput"></textarea>
        <span>
            <button title="add a regular note" @click="isNote = true, isImage=false,isVideo=false,isToDo=false,placeHolderMsg='enter a new note'" :class="{'keep-button-choice': isNote}">✍🏾</button>
            <button title="add an image note" @click="isNote = false, isImage=true,isVideo=false,isToDo=false,placeHolderMsg='enter img url'" :class="{'keep-button-choice': isImage}">🖼️</button>
            <button title="add a video note" @click="isNote = false, isImage=false,isVideo=true,isToDo=false,placeHolderMsg='enter link from youtube'" :class="{'keep-button-choice': isVideo}">🎞️</button>
            <button title="add a todo list" @click="isNote = false, isImage=false,isVideo=false,isToDo=true,placeHolderMsg='to submit todo, press enter'" :class="{'keep-button-choice': isToDo}">📃</button>
        </span>
    </div>
    
    <div v-if="isEdit" id="div-modal-tmpl" class="keep-modal-mask" v-on:click.self="saveNote">
        <div class="keep-modal-wrapper-keep" v-on:click.self="saveNote">
            <div class="keep-modal-container" :style="{backgroundColor: noteBgColor}">
                <button title="close" class="keep-modal-cancel-btn" v-on:click="saveNote(false)">🗙</button>
                <h3>Create New Note</h3>
                <input v-model="noteTitle" placeholder="enter note title">
                <textarea v-if="!isToDo" type="text" v-model="userInput" v-bind:placeholder="placeHolderMsg"></textarea>
                <div v-else class="keep-add-todo-container">
                    <textarea v-on:keyup.enter="addTodo" v-bind:placeholder="placeHolderMsg" type="text" v-model="userInput"></textarea>
                    <button @click="addTodo">enter</button>
                </div>
                <span :class="{'opstions-buttons-on-todos':isToDo}">
                    <button title="change note color" class="keep-color-pallete-btn" v-on:click="openPallete=!openPallete">🎨</button>
                    <button title="save note" class="keep-cls-modal-save-btn" v-on:click="saveNote">💾</button>
                </span>
                <div v-if="openPallete" class="keep-color-pallete-container">
                    <span @click="noteBgColor='#90ee90'" class="keep-green-dot"></span>
                    <span @click="noteBgColor='#ffc0cb'" class="keep-pink-dot"></span>
                    <span @click="noteBgColor='#e0ffff'" class="keep-lightBlue-dot"></span>
                    <span @click="noteBgColor='#ffffe0'" class="keep-yellow-dot"></span>
                    <span @click="noteBgColor='#dda0dd'"class="keep-purple-dot"></span>
                </div>
            </div>
        </div>
    </div>
    `
  ,components:{
  },
    data() {
      return {

            userInput: null,
            isNote:true,
            isImage:null,
            isVideo:null,
            isToDo:null,
            placeHolderMsg: 'enter a new note',
            isEdit: null,
            newNoteDetails: null,
            noteTitle: null,
            openPallete: false,
            noteBgColor: '#F7F0F5',
            todosList: [],
        }
    },
    methods: {
        saveNote(isSave=true){
            
            this.isEdit = false

            this.newNoteDetails = {
                    title:this.noteTitle || 'No Title',
                    style:{backgroundColor:this.noteBgColor}
                }
           
            if(this.isNote) this.newNoteDetails.txt = this.userInput
            else if(this.isImage) this.newNoteDetails.url = this.userInput
            else if(this.isVideo) this.newNoteDetails.vUrl = this.userInput
            else this.newNoteDetails.todos = this.todosList

            this.userInput = ''
            this.noteTitle = ''
            this.noteBgColor = '#F7F0F5'
            this.openPallete = false
            if(isSave) this.createNote()
        },
        createNote(){
            var noteType = (this.isNote) ? 'note-txt' : (this.isImage) ? 'note-img' : (this.isVideo) ? 'note-video' : 'note-todos'
            var newNote = { 
                id: this.makeId(), 
                type: noteType,
                isPinned: false,
                info: {
                    title:this.newNoteDetails.title,
                },
                style:{backgroundColor:this.newNoteDetails.style.backgroundColor}
            }

            if(this.isNote) newNote.info.txt = this.newNoteDetails.txt
            else if(this.isImage) newNote.info.url = this.newNoteDetails.url
            else if(this.isVideo) newNote.info.vUrl = this.newNoteDetails.vUrl
            else newNote.info.todos = this.newNoteDetails.todos

            this.$emit('add',newNote)
        },
        makeId(length = 5) {
            var txt = '';
            var possible =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (var i = 0; i < length; i++) {
              txt += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return txt;
        },
        addTodo(){
            this.todosList.push({txt:this.userInput})
            this.userInput= ''
        }
    },
    created(){
    },
    computed: {},
  };
  