import {useState} from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);

    function handlerClick() {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <div>
            <div><button onClick={handlerClick}>Increment</button></div>
            <h1>Counter: {counter}</h1>
        </div>
    )
}