const express = require('express'); // se inyecta la dependencia de express
const router = express.Router(); // Se genera la instancia del router
const mongoose = require('mongoose') // se inyecta dependecia de mongoose
let User = require('../models/users'); // Se inyecta la dependencia del modelo ya creado

// Se agrega la primera ruta llamada gente con el metodo GET
router.get('/gente',async (req, res)=>{
    const Users = await User.find({}); 
    res.render('index.ejs',{Users}); //renderiza la vista index.ejs
});

module.exports = router; //Se exporta el routeador