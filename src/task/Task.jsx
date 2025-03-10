import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setItems(draft => {
            draft.push(item);
        });

        setItem("");
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Task" value={item} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>

            <ul>
                {
                    items.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })
                }
            </ul>
        </div>
    )
}