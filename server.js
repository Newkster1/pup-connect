require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");

const app = express();

//connect to DB
connectDB();

app.get("/", (req, res) => res.send("API Running"));

//api routes
app.use("/api/users", require("./api/users"));

app.use("/api/profile", require("./api/profile"));
app.use("/api/posts", require("./api/posts"));
app.use("/api/pups", require("./api/pups"));
app.use("/api/auth", require("./api/auth"));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
