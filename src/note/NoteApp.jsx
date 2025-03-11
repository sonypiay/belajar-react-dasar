import NoteList from "./NoteList.jsx";
import NoteForm from "./NoteForm.jsx";
import {useImmerReducer} from "use-immer";

let id = 0;
const initialNotes = [
    {
        id: id++,
        text: "Learn Html",
        done: true
    },
    {
        id: id++,
        text: "Learn CSS",
        done: false
    },
    {
        id: id++,
        text: "Learn JavaScript",
        done: false
    },
    {
        id: id++,
        text: "Learn ReactJS",
        done: false
    }
];

function notesReducer(notes, action) {
    if(action.type === "ADD_NOTE") {
        notes.push({
            id: id++,
            text: action.text,
            done: false,
        });
    } else if(action.type === "CHANGE_NOTE") {
        const index = notes.findIndex(item => item.id === action.id);
        notes[index].done = action.done;
        notes[index].text = action.text;

    } else if(action.type === "DELETE_NOTE") {
        const index = notes.findIndex(item => item.id === action.id);
        notes.splice(index, 1);
    }

    // switch(action.type) {
    //     case "ADD_NOTE":
    //         return [
    //             ...notes,
    //             {
    //                 id: id++,
    //                 text: action.text,
    //                 done: false,
    //             }
    //         ]
    //
    //     case "CHANGE_NOTE":
    //         return notes.map(note => {
    //             return note.id === action.id
    //                 ? {...note, text: action.text, done: action.done}
    //                 : note;
    //         });
    //
    //     case "DELETE_NOTE":
    //         return notes.filter(note => note.id !== action.id);
    //
    //     default:
    //         return notes;
    // }
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    function handleAddNote(text) {
        dispatch({
            type: "ADD_NOTE",
            text: text,
        })
    }

    function handleChangeNote(note) {
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
        })
    }

    function handleDeleteNote(note) {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        })
    }

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
        </div>
    )
}