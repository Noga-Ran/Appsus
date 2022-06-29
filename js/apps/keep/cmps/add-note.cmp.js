export default {
    template: `
    <div class="keep-app-add-note" @click="NoteEdit">
        <input v-if="!isToDo" type="text" v-model="userInput" v-bind:placeholder="placeHolderMsg">
        <textarea v-else v-bind:placeholder="placeHolderMsg" type="text" v-model="userInput"></textarea>
        
        <button @click="isNote = true, isImage=false,isVideo=false,isToDo=false,placeHolderMsg='enter a new note'" :class="{'keep-button-choice': isNote}">N</button>
        <button @click="isNote = false, isImage=true,isVideo=false,isToDo=false,placeHolderMsg='enter img url'" :class="{'keep-button-choice': isImage}">I</button>
        <button @click="isNote = false, isImage=false,isVideo=true,isToDo=false,placeHolderMsg='enter video url'" :class="{'keep-button-choice': isVideo}">Y</button>
        <button @click="isNote = false, isImage=false,isVideo=false,isToDo=true,placeHolderMsg='enter new todo list'" :class="{'keep-button-choice': isToDo}">TD</button>
    </div>
    <div v-if="isEdit" id="div-modal-tmpl" class="keep-modal-mask">
        <div class="keep-modal-wrapper-keep">
            <div class="keep-modal-container">
                <div name="header">Header</div>
                <div name="content">content</div>
                <button class="keep-cls-modal-close-btn" @keydown.esc="isEdit=false" v-on:click="isEdit=false">Save</button>
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
            isEdit: null

        }
    },
    methods: {
        closeModel(){
            this.isEdit = false
        },
        NoteEdit(){
            if(!this.userInput) {
                this.isEdit = true
                return 
            }
            //console.log(this.userInput, this.isNote, this.isImage, this.isVideo,this.isToDo);
            //todo: save note, rendere notes
        }
    },
    created(){
    },
    computed: {},
  };
  