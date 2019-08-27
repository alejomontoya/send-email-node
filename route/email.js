const express = require('express');
const route = express.Router();
/**
 * Requiri configuracion email
 */
const transporter = require('../transporter');


/**
 * Ruta formulario 1
 */
route.get('/formulario1', (req, res) => {
    const datos = {
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        email: req.body.email,
        telefono: req.body.telefono,
        mensaje: req.body.mensaje
    }
    const mailOptions = {
        from: 'your@email.com',
        to: 'your@email.com',
        subject: 'Sugerencias',
        template: 'formulario1',
        context: datos
    }
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            res.json({mensaje: 'a ocurrido un error'});
        else
            res.json({ mensaje: 'email enviado'});
    });
    
});

module.exports = route;


