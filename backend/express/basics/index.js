const express = require("express")
require('dotenv/config')
const userRouter = require("./routes/user")
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use("/api/users",userRouter)

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