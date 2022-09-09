const express = require("express")
require('dotenv/config')
const userRouter = require("./routes/user")
const app = express();
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')
const register = require("./routes/register");


mongoose.connect("mongodb+srv://mansoor:mans00r@cluster0.bpksr.mongodb.net/?retryWrites=true&w=majority", () => console.log('connected to db'))

app.use(express.json())
app.use("/api/users",userRouter)
app.use("/api/register", register)
app.use("/api/", register)
app.post("/api/products", (req, res) => {
    const {name} = req.body;
    const {id} = req.headers;
    const {order} = req.query;

    res.json({
        name,
        id,
        order,
        password: process.env.PASSWORD
    })
});


app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))