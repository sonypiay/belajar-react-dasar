export default function SearchForm() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                alert("Search form!");
            }}>Submit</button>
        </form>
    )
}