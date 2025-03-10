import { useImmer } from "use-immer";

export default function ContactForm() {
    const [contact, setContact] = useImmer({
        name: "",
        message: ""
    });

    function handleNameChange(e) {
        setContact(draft => {
            draft.name = e.target.value
        });
    }

    function handleMessageChange(e) {
        setContact(draft => {
            draft.message = e.target.value
        });
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" name="name" placeholder="Name" onChange={handleNameChange} value={contact.name} />
                <br />
                <input type="text" name="message" placeholder="Message" onChange={handleMessageChange} value={contact.message} />
            </form>

            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </div>
    )
}