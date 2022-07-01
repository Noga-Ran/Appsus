export default {
    props: ['noteEdit'],
    template: `
    <div v-if="isEdit" id="div-modal-tmpl" class="keep-modal-mask" v-on:click.self="saveNote">
        <div class="keep-modal-wrapper-keep" v-on:click.self="saveNote">
            <div class="keep-modal-container" :style="{backgroundColor: noteBgColor}">
                <button title="close" class="keep-modal-cancel-btn" v-on:click="saveNote(false)">🗙</button>
                <h3>Edit Your Note</h3>
                <input v-model="noteTitle" placeholder="enter note title">
                <textarea v-if="!isToDo" type="text" v-model="userInput" v-bind:placeholder="placeHolderMsg"></textarea>
                <textarea v-on:keyup.enter="addTodo" v-else v-bind:placeholder="placeHolderMsg" type="text" v-model="userInput"></textarea>
                <span>
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
            userInput: this.noteEdit.info.txt,
            isEdit: true,
            placeHolderMsg: 'edit note',
            newDetails: null,
            noteTitle: this.noteEdit.info.title,
            openPallete: false,
            noteBgColor: this.setBg(),
        }
    },
    methods: {
        saveNote(isSave=true){

            this.isEdit = false

            this.newDetails = {
                    title:this.noteTitle,
                    style:{backgroundColor:this.noteBgColor},
                    newInput: this.userInput
                }

            this.userInput = ''
            this.noteTitle = ''
            this.noteBgColor = '#F7F0F5'
            this.openPallete = false
            if(isSave) this.updateNote()
        },
        updateNote(){

            var noteType = this.noteEdit.type
            this.noteEdit.style = {}
            this.noteEdit.style.backgroundColor = this.noteEdit.style.backgroundColor
            this.noteEdit.style.backgroundColor = this.newDetails.style.backgroundColor
            this.noteEdit.info.title = this.newDetails.title
            
            if(noteType==='note-txt') this.noteEdit.info.txt = this.newDetails.newInput
            else if(noteType==='note-img') this.noteEdit.info.url = this.newDetails.newInput
            else if(noteType==='note-video') this.noteEdit.info.vUrl = this.newDetails.newInput
            else this.noteEdit.info.todo = this.newDetails.newInput
            
            this.$emit('saveEdit',this.noteEdit)
        },
        setBg(){

            if('style' in this.noteEdit){
                if('backgroundColor' in this.noteEdit.style) return this.noteEdit.style.backgroundColor
            }
            return '#F7F0F5'
        },
    },
    created(){

    },
    computed: {},
  };