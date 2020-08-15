const db = require("../models");
const Actif = db.actif;
const Profil = db.profil;
const Produit = db.produit;


exports.findAll = (req, res) => {

  Actif.findAll({ 
    include: [
      {
        model: Profil,
        as: "profil_actif",
      },
      {
        model: Produit,
        as: "produit_actif"
      }
    ]
   })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Actif."
      });
    });
};

exports.findById = (req, res) => {
  const idActif = req.params.id;

  Actif.findByPk(idActif, {
    include: [
        {
          model: Profil,
          as: "profil_actif",
        },
        {
          model: Produit,
          as: "produit_actif"
        }
      ]
     })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Actif."
      });
    });
};

exports.findByIdProfil = (req, res) => {
  const idProfil = req.body.params.idProfil;

  Actif.findAll({
    include: [
      {
        model: Profil,
        as: "profil_actif",
        where: {id: idProfil } 
      },
      {
        model: Produit,
        as: "produit_actif"
      }
    ], 
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Actifs."
      });
    });

}