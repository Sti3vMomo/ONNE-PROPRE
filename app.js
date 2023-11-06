const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Middleware pour gérer les requêtes URL encodées
app.use(express.urlencoded({ extended: true }));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

// Route 404 (page non trouvée)
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/html/404.html');
});

app.listen(port, () => {
  console.log(`Serveur en cours d'écoute sur le port ${port}`);
});
