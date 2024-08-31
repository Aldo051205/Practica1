
const express = require('express');
const router = express.Router();
const logMiddleware = require('../middlewares/logMiddleware');

router.get('/home', logMiddleware("Has accedido a la ruta /home"), (req, res) => {
    const fechaActual = new Date();
    res.send(`Hola, estás en home. Fecha y hora actuales: ${fechaActual}`);
});

module.exports = router;


/*const express = require('express');
const router = express.Router();
const logMiddleware = require('../middlewares/logMiddleware');

router.get('/home', logMiddleware("Has accedido a la ruta /home"), (req, res) => {
    res.send("Hola, estás en home");
});

module.exports = router;
*/