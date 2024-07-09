const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta donde se encuentra server.js
app.use(express.static(__dirname));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
