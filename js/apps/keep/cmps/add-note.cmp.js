export default {
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

    <div v-if="isEdit" id="div-modal-tmpl" class="keep-modal-mask">
        <div class="keep-modal-wrapper-keep">
            <div class="keep-modal-container">
                <div name="header">Header</div>
                <input v-if="!isToDo" type="text" v-model="userInput" v-bind:placeholder="placeHolderMsg">
                <textarea v-else v-bind:placeholder="placeHolderMsg" type="text" v-model="userInput"></textarea>
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
            newNoteTxt: null,

        }
    },
    methods: {
        saveNote(){
            this.isEdit = false
            this.newNoteTxt = this.userInput
            this.userInput = ''
            this.createNote()
        },
        NoteEdit(){
            if(!this.userInput) {
                this.isEdit = true
                return 
            }
            //console.log(this.userInput, this.isNote, this.isImage, this.isVideo,this.isToDo);
            //todo: save note, rendere notes
        },
        createNote(){
            var noteType = (this.isNote) ? 'note-txt' : (this.isImage) ? 'note-img' : (this.isVideo) ? 'note-video' : 'note-todos'
            var newNote = { 
                id: this.makeId(), 
                type: noteType,
                isPinned: false,
                info: 
                { txt: this.newNoteTxt } 
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
    },
    computed: {},
  };
  