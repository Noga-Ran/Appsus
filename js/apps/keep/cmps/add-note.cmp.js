export default {
    props: ['noteToEdit'],
    template: `
    <div class="keep-app-add-note" @click="NoteEdit">
        <input v-if="!isToDo" type="text" v-model="userInput" ref="ph" v-bind:placeholder="placeHolderMsg">
        <textarea v-else v-bind:placeholder="placeHolderMsg" ref="ph" type="text" v-model="userInput"></textarea>
        
        <button @click="isNote = true, isImage=false,isVideo=false,isToDo=false,placeHolderMsg='enter a new note'" :class="{'keep-button-choice': isNote}">N</button>
        <button @click="isNote = false, isImage=true,isVideo=false,isToDo=false,placeHolderMsg='enter img url'" :class="{'keep-button-choice': isImage}">I</button>
        <button @click="isNote = false, isImage=false,isVideo=true,isToDo=false,placeHolderMsg='enter video url'" :class="{'keep-button-choice': isVideo}">Y</button>
        <button @click="isNote = false, isImage=false,isVideo=false,isToDo=true,placeHolderMsg='enter new todo list'" :class="{'keep-button-choice': isToDo}">TD</button>
    </div>

    <p>{{userInput}}</p>

    <div v-if="isEdit" id="div-modal-tmpl" class="keep-modal-mask" v-on:click.self="saveNote">
        <div class="keep-modal-wrapper-keep">
            <div class="keep-modal-container" :style="{backgroundColor: noteBgColor}">
                <input v-model="noteTitle" placeholder="enter note title">
                <input v-if="!isToDo" type="text" v-model="userInput" v-bind:placeholder="placeHolderMsg">
                <textarea v-else v-bind:placeholder="placeHolderMsg" type="text" v-model="userInput"></textarea>
                <button class="keep-color-pallete-btn" v-on:click="openPallete=!openPallete">pallet</button>
                <div v-if="openPallete" class="keep-color-pallete-container">
                    <span @click="noteBgColor='#90ee90'" class="keep-green-dot"></span>
                    <span @click="noteBgColor='#ffc0cb'" class="keep-pink-dot"></span>
                    <span @click="noteBgColor='#e0ffff'" class="keep-lightBlue-dot"></span>
                    <span @click="noteBgColor='#ffffe0'" class="keep-yellow-dot"></span>
                    <span @click="noteBgColor='#dda0dd'"class="keep-purple-dot"></span>
                </div>
                <button class="keep-cls-modal-close-btn" v-on:click="saveNote">Save</button>
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
            noteBgColor: '#F7F0F5'
        }
    },
    methods: {
        saveNote(event){
            console.log(event);
            if(!this.userInput) return
            this.isEdit = false
            this.newNoteDetails = {
                    txt: this.userInput,
                    title:this.noteTitle,
                    style:{backgroundColor:this.noteBgColor}
                }
            this.userInput = ''
            this.noteTitle = ''
            this.noteBgColor = '#F7F0F5'
            this.openPallete = false
            this.createNote()
        },
        NoteEdit(){
            if(!this.userInput) {
                this.isEdit = true
                return 
            }
        },
        createNote(){
            var noteType = (this.isNote) ? 'note-txt' : (this.isImage) ? 'note-img' : (this.isVideo) ? 'note-video' : 'note-todos'
            var newNote = { 
                id: this.makeId(), 
                type: noteType,
                isPinned: false,
                info: {
                    txt: this.newNoteDetails.txt,
                    title:this.newNoteDetails.title,
                },
                style:{backgroundColor:this.newNoteDetails.style.backgroundColor}
            }
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
        }
    },
    created(){
        console.log(this.noteToEdit,'in edit!!!!!!!')
    },
    computed: {},
  };
  