const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
router.post('/', async (req, res) => {

    // const {error} = registerVlidation(req.body);
    // ... 

    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('email already exist')


    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt)


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id})
        // res.send(savedUser);
    }
    catch(err) {
        res.status(400).send(err);
    }
})

router.post("/login", async (req, res) => {
    // const {error} = loginValidation(req.body)
    // if(error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Email not found")

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send("Password is wrong")


    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token)

    // res.send("Logged in Successfully!");
})

module.exports = router;