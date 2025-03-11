import { useState } from "react";

export default function NoteForm({onAddNote}) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit() {
        setText("");
        onAddNote(text);
    }

    return (
        <>
            <input type="text" onChange={handleChange} value={text} placeholder="Add Note" />
            <button onClick={handleSubmit}>Add Note</button>
        </>
    )
}