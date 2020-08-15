const db = require("../models");
const Conseil = db.conseil;
const Profil = db.profil;


exports.findAll = (req, res) => {

  Conseil.findAll({ 
    include: [
      {
        model: Profil,
        as: "profil_conseil",
      }
    ]
   })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Conseil."
      });
    });
};

exports.findById = (req, res) => {
  const idConseil = req.params.id;

  Conseil.findByPk(idConseil, {
    include: [
        {
          model: Profil,
          as: "profil_conseil",
        }
      ]
     })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Conseil."
      });
    });
};