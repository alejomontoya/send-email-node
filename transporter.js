const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');

//Opciones configuaricon templates
var options = {
    viewEngine: {
        extname: '.hbs',
        layoutsDir: 'views/',
        defaultLayout : ''
    },
    viewPath: 'views/',
    extName: '.hbs'
};

//Configuracion servicio e autentificacion
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jesus@igniweb.com', // Cambialo por tu email
        pass: '3217708483' // Cambialo por tu password
    },
});

//Use configuracion template
transporter.use('compile', hbs(options));


module.exports = transporter;