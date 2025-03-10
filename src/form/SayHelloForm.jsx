export default function SayHelloForm() {
    function handlerClick(e) {
        e.preventDefault();
        const name = document.querySelector('#input_name').value;
        document.querySelector("#text_hello").innerText = `Hello ${name}`;
    }

    return (
        <div>
            <form>
                <input type="text" id="input_name" />
                <button type="submit" onClick={handlerClick}>Submit</button>
            </form>

            <h1 id="text_hello">Hello World</h1>
        </div>
    )
}