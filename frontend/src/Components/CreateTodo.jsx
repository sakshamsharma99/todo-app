export function CreateTodo() {
    return <div>
        <input style={{
            padding:" 10px",
            margin: "10px"
        }} type="text" id="title" placeholder="title"/> <br />
        <input style={{
            padding:" 10px",
            margin: "10px"
        }} type="text" id="description" placeholder="description"/> <br />

        <button style={{
            padding:" 10px",
            margin: "10px"
        }} onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: 'POST',
                body: JSON.stringify({
                    title: document.getElementById("title").value,
                    description: document.getElementById("description").value
                }), 
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a Todo</button>
    </div>
}
