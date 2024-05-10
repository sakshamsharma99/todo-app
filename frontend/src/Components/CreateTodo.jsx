export function CreateTodo() {
    return <div>
        <input style={{
            padding:" 10px",
            margin: "10px"
        }} type="text" placeholder="title"/> <br />
        <input style={{
            padding:" 10px",
            margin: "10px"
        }} type="text" placeholder="description"/> <br />

        <button style={{
            padding:" 10px",
            margin: "10px"
        }}>Add a Todo</button>
    </div>
}
