const express = require("express");
const { todo } = require("./db");
const { createTodo, updateTodo} = require("./types");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const prasedPayload = createTodo.safeParse(createPayload);
    if(!prasedPayload.success) {
        res.status(411).json({
            msg: "You send the wrong input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
});

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const prasedPayload = updateTodo.safeParse(updatePayload);
    if(!prasedPayload.success) {
        res.status(411).json({
            msg: "You send the wrong input"
        })
        return;
    }
    await todo.findOneAndUpdate({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000, ()=>{
    console.log("Listen to port 3000");
})