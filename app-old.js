import http from 'http';

// request: es lo que se esta solicitando por el cliente (solicitud http)
// response: es lo que el servidor devuelve al cliente (respuesta http)
http.createServer((req, res) => {
  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  // res.writeHead(200, {'Content-Type': 'application/csv'});

  res.write('Hola Mundo');

  res.end(); // le dice a node que termine
}).listen(8000);

console.log('Escuchando en el puerto', 8000);