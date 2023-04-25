const express = require('express');
const app = express ();

//middlewares hace referencia a funciones antes de que lleguen ala ruta
app.use(express.json());
app.use(express.urlencoded({extended: false}));   //dato que venga  a traves de un formulario para conertirlo en un objeto
//definir rutas
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port 3000');