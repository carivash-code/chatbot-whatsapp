const express = require("express");
const apiRoute = require("./routes/routes");
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {console.log("el puerto es: " + PORT)});