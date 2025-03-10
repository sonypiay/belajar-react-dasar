import Todo from "./Todo.jsx";

export default function TodoList() {
    const data = [
        {
            id: 1,
            text: "Learn HTML",
            isCompleted: true,
        },
        {
            id: 2,
            text: "Learn CSS",
            isCompleted: true,
        },
        {
            id: 3,
            text: "Learn JavaScript",
            isCompleted: true,
        },
        {
            id: 4,
            text: "Learn ReactJS",
            isCompleted: false,
        },
    ];

    const todos = data.map((todo) => <Todo key={todo.id} {...todo} />)
    return (
        <ul>
            {todos}
        </ul>
    )
}