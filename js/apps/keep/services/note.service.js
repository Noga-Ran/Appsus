import { storageService } from '../../../services/storage.service.js';

const KEEP_NOTE_KEY = 'notes';
_createNotes();


export const noteService = {
    query,
    remove,
    get,
    updateTodo,
    addNewNote,
    // saveReview,
    // getGoogleBook,
    // getNextBookId,
};
  
function query() {
  return storageService.query(KEEP_NOTE_KEY)
}

// function getGoogleBook(googleBook){
//   const GOOGLE_BOOKS='https://www.googleapis.com/books/v1/volumes?printType=books&q='
//   var bookList =  axios.get(`${GOOGLE_BOOKS}+${googleBook}`)
//   return bookList
// }

function updateTodo(note, todoUpdate){
    let index = todoUpdate.index
    note.info.todos[index] = todoUpdate

    storageService.put(KEEP_NOTE_KEY, note)
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
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "http://some-img/me",
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
                ]
            }
        }
    ];
    
    return notes
}

function addNewNote(note){
    storageService.post(KEEP_NOTE_KEY,note)
}
// function saveToStorage(book,r){
//   if(book.reviews) book.reviews.push(r) 
//   else {
//     book.reviews = []
//     book.reviews.push(r)
//   }
//   storageService.put(BOOKS_KEY,book)
// }

// function getNextBookId(bookId) {
//   return storageService.query(BOOKS_KEY)
//       .then(books => {
//           const idx = books.findIndex(book => book.id === bookId)
//           return (idx < books.length-1)? books[idx + 1].id : books[0].id
//       })
// }