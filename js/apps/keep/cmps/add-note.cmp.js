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
            placeHolderMsg: 'enter a new note'

        }
    },
    methods: {
        NoteEdit(){
            if(!this.userInput) return
            //console.log(this.userInput, this.isNote, this.isImage, this.isVideo,this.isToDo);
            //todo: save note, rendere notes
        }
    },
    created(){
    },
    computed: {},
  };
  