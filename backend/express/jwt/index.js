const express = require("express");
require("dotenv/config")
const mongoose = require("mongoose");
const userRoutes = require("./routes/user")
var cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express();

const corsOptions = {
    exposedHeaders: 'Authorization',
  }

app.use(cors(corsOptions));

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bpksr.mongodb.net/?retryWrites=true&w=majority`, ()=> console.log('Connected to DB'));

app.use(express.json());

app.use("/api/user/", userRoutes);

app.get("/", (req, res) => {
    res.send("Testing...")

}) 



app.listen(PORT, ()=> console.log(`API Server: ${PORT}`));



