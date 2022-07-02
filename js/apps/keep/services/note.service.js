import { storageService } from '../../../services/storage.service.js';

const KEEP_NOTE_KEY = 'notes';
_createNotes();


export const noteService = {
    query,
    remove,
    get,
    updateTodo,
    deleteTodo,
    addNewNote,
    updateNote,
}
  
function query() {
  return storageService.query(KEEP_NOTE_KEY)
}


function updateNote(note){
    storageService.put(KEEP_NOTE_KEY, note)
}

function updateTodo(note, todoUpdate){
    let index = todoUpdate.index
    note.info.todos[index] = todoUpdate

    storageService.put(KEEP_NOTE_KEY, note)
}

function deleteTodo(note,deleteTodo) {
    
    let index = deleteTodo.index
    note.info.todos.splice(index,1)

    for(var i=0; i<note.info.todos.length; i++){
        note.info.todos[i].index = i
    }

    updateNote(note)

}


function remove(noteId) {
    return storageService.remove(KEEP_NOTE_KEY, noteId)
}

function get(noteId) {
  return storageService.get(KEEP_NOTE_KEY, noteId)
}

function _createNotes() {
    storageService.query(KEEP_NOTE_KEY).then(checkNotes)
}

function checkNotes(notes){
    console.log(notes)
    if(!notes || !notes.length){
        console.log('getting notes',notes, notes.length);
        notes = getNotes()
        storageService._save(KEEP_NOTE_KEY, notes);

    }
    return notes
}

function getNotes(){
    const notes = [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
                txt: "000-0000000",
                title: "Maia's phone"
            },
            style: {
                backgroundColor: "rgb(144, 238, 144)"
            },

        },
        {
            id: "n102",
            type: "note-img",
            isPinned: false,
            info: {
                url: "https://freepngimg.com/thumb/dog/6-dog-png-image.png",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#ffc0cb"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            isPinned: false,
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 },
                    {txt: "clean my room", doneAt: null},
                ],
                title: 'my todos'
            }
        },
        {
            id: "n104",
            type: "note-video",
            isPinned: true,
            info: {
                label: "study",
                vUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
                title: 'studing'
            }
        },
        {
            id: "n105",
            type: "note-video",
            isPinned: false,
            info: {
                label: "Get my stuff together",
                vUrl: "https://www.youtube.com/embed/nhBVL41-_Cw",
                title: 'what is vue?'
            },
            style: {
                backgroundColor: "#dda0dd"
            }
        }
    ];
    
    return notes
}

function addNewNote(note){
    storageService.post(KEEP_NOTE_KEY,note)
}