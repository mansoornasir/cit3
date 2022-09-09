const express = require("express");
const profileRoutes = require("./routes/profile");
require("dotenv/config")
const userRoutes = require("./routes/user")
const PORT = process.env.PORT || 3001

const app = express();
app.use(express.json());


app.use("/api/user", userRoutes)
app.use("/api/profile", profileRoutes)


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));