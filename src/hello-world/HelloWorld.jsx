import "./HelloWorld.css";

export default function HelloWorld() {
    const props = {
        text: "Hello World!"
    };

    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </div>
    )
}

function HeaderHelloWorld({text = "Lupa kasi teks!"}) {
    return (
        <h1 className="title">{ text.toUpperCase() }</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Selamat belajar React JS";
    return (
        <p className="content">{ text.toLowerCase() }</p>
    )
}