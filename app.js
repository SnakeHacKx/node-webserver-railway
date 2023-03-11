import * as url from 'url';
import express from 'express';
import path from 'path';
import hbs from 'hbs';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
// hbs.registerPartials(__dirname, 'views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Omar Medina',
    title: 'Curso de NodeJS',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Omar Medina',
    title: 'Curso de NodeJS',
  });
});

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Omar Medina',
    title: 'Curso de NodeJS',
  });
});

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, () => { 
  console.log(`Ejemplo escuchando en el puerto ${port}`);
});