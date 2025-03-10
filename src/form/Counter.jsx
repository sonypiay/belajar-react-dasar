import {useState} from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);

    console.log(`Render counter: ${counter}`);

    function handlerClick() {
        // setCounter(counter + 1);
        setCounter(c => c + 1);
        console.log(counter);
    }

    return (
        <div>
            <div><button onClick={handlerClick}>Increment</button></div>
            <h1>Counter: {counter}</h1>
        </div>
    )
}