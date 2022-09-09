const userRoutes = require("express").Router();
const Joi = require('joi');
const {userSchema} = require('./validation_schema/user_schema')
const bcrypt = require('bcryptjs')

userRoutes.get("/", (req, res) => {
    res.send({
        message: "We are at user's home"
    })
})

userRoutes.post("/", async (req, res) => {

    const {error} = userSchema(req.body);
    
    if(error)  res.send(error.details[0].message);

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)
    const valid = await bcrypt.compare(req.body.password, hash)

    res.status(200).send(valid);
    // Body
    // console.log(req.body.name)
    // console.log(req.body.id)
    // console.log(req.body.password)

    // res.send({
    //     name: req.body.name
    // })

    // res.header("token", req.body.password).send()

    // Headers
    // console.log(req.headers.secret_key)

    // URL
    // console.log(req.query.id)
})

userRoutes.delete("/", (req, res) => {

})

userRoutes.get("/cart", (req, res) => {
    res.send({
        message: "We are at user's cart"
    })
})

module.exports = userRoutes;
