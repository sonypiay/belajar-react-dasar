import { useState } from "react";

export default function TaskForm({onSubmit}) {
    const [item, setItem] = useState("");

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(item);
        setItem("");
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="TaskForm" value={item} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}