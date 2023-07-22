//rutas
// lo que llega a esta ruta tiene el /character implisito
const express = require('express');
const {getCharById} = require("../controllers/getCharById")

const characterRouter = express.Router();

characterRouter.get("/:id", getCharById);


module.exports = characterRouter