

const express = require("express");
require("dotenv").config();
const app = express();


const rutaraiz = require('./routes/rutaraiz');
const rutahome = require('./routes/rutahome');

app.use(rutaraiz);
app.use(rutahome);

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
    console.log("Servidor en http://localhost:" + puerto);
});
