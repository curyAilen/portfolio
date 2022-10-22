// Librerías, módulos, variables, etc.
const express = require('express');
const app = express();
const puerto = 3000;
const rutasMain = require('./src/routes/main.js');

//Configuración de carpetas y vistas
app.set('view engine', 'ejs');
app.use('/imagenes', express.static(__dirname + '/public/imagenes'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

//Rutas
app.use('/', rutasMain);


// Levantar el server
app.listen(puerto, () => {
    console.log("servidor corriendo en el puerto " + puerto);
})