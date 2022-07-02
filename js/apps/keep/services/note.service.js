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
                txt: "Fullstack Me Baby!",
                title: "no title"
            }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "./https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ],
                title: 'my todos'
            }
        }
    ];
    
    return notes
}

function addNewNote(note){
    storageService.post(KEEP_NOTE_KEY,note)
}