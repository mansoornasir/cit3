const router = require("express").Router();
const {regValidation, loginValidation} = require("./validation")
const User = require("../models/User");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./verifyToken")


router.get("/register", verifyToken, (req, res) => {
    res.send("We are at /api/register/ GET")
})

router.post("/register", async (req, res) => {
    const {name, email, password, address} = req.body;
    const {error} = regValidation(req.body);
    
    if(error) return res.send(error.details[0].message); // Guard Clause

    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(password, salt);

    const findUser = await User.findOne({email: req.body.email})
    
    if(findUser) return res.status(400).send("Email is already registered!!!")

    const user = new User({
        name,
        email,
        password: hash,
        address
    })

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }
    catch(err) {
        res.status(400).send(err);
    }

})

router.patch("/register", (req, res) => {

})

router.delete("/register", (req, res) => {

})

router.get("/login", (req, res) => {

})
router.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email: email})
    if(!user) return res.status(400).send("Email not found!");

    const compare = await bycrypt.compare(password, user.password);
    if(!compare) return res.status(400).send("Password is incorrect!");

    const token = jwt.sign({email: user.email}, process.env.TOKEN_SECRET)

    res.header("auth-token", token).send()

    // res.send("Logged in Successfully!")

})
router.patch("/login", (req, res) => {

})
router.delete("/login", (req, res) => {

})

router.get("/test", (req, res) => {
    res.send("Testing...")
})

module.exports = router;