const contactRoute = require("./routes/contactRoutes");
const db = require("./config/db");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(

    "/api/contact",

    contactRoute

);

app.get("/", (req, res) => {

    res.send("🚀 Cloud Portfolio Backend Running");

});

app.get("/api/health", (req, res) => {

    res.json({

        success: true,

        message: "Backend Working Successfully",

        version: "1.0.0"

    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server running on http://localhost:${PORT}`);

});