const router = require("express").Router();
const Joi = require('joi');
// const {userValidation} = require("./validation")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const auth = require('./verifyToken');

router.post("/register", async (req, res) => {
    // VALIDATION USING JOI
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string().min(3).max(100).email().required(),
        password: Joi.required()
        })
    const body = req.body;
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)
    const validPass = await bcrypt.compare(req.body.password, hash)


    // token
    const token = jwt.sign({id: 1}, process.env.SECRET)
    res.header("auth-token", token).send();

    // res.send(validPass)
    const {error} = schema.validate(body);
    if(error) {
        res.status(400).send(error.details[0].message)
    }
})

router.get("/register", (req, res) => {
    

})

router.patch("/register", (req, res) => {

})

router.delete("/register", (req, res) => {

})

router.get("/profile" ,auth, (req, res) => {
    res.send("Reached.")
})

router.post("/profile", (req, res) => {
    
})

router.patch("/profile", (req, res) => {

})

router.delete("/profile", (req, res) => {

})

module.exports = router;
