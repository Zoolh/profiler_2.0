const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var path = require('path');

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.options('*', cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

// If I want to rebuild database on each launch or not
// db.sequelize.sync({
//   force: false,
//   alter: true
// }).then(() => {
//   console.log("Drop and re-sync db.");
// });


// simple route - accueil de base de l'API
// app.get("/", (req, res) => {
//   res.json({ message: "Bienvenue sur l'API Profiler ! " });
// });


// Ci-dessous : routes pour accéder au build en mode prod
app.use(express.static(path.join(__dirname, 'build')));

// Index quand il y a le build
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

require("./app/routes/section.routes")(app);
require("./app/routes/profil.routes")(app);
require("./app/routes/question.routes")(app);
require("./app/routes/proposition.routes")(app);
require("./app/routes/actif.routes")(app);
require("./app/routes/conseil.routes")(app);
require("./app/routes/supportInv.routes")(app);
require("./app/routes/typeGestion.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
