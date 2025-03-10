export default function AlertButton({message}) {
    function handleClick(e) {
        alert(message);
        console.dir(e);
    }

    return (
        <button onClick={handleClick}>Click Me!</button>
    )
}