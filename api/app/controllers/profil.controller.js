const db = require("../models");
const Profil = db.profil;
const Actif = db.actif;
const Produit = db.produit;
const Conseil = db.conseil;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const libelle = req.query.libelle;
  var condition = libelle ? { libelle: { [Op.like]: `%${libelle}%` } } : null;

  Profil.findAll({ 
    where: condition,
    include: [
      {
        model: Actif,
        as: "actif_profil",
        include: [
          {
            model: Produit,
            as: "produit_actif"
          }
        ]
      },
      {
        model: Conseil,
        as: "conseil_profil"
      }
    ]
   })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving profil."
      });
    });
};

exports.findById = (req, res) => {
  const idProfil = req.params.id;

  Profil.findByPk(idProfil, {
    include: [
      {
        model: Actif,
        as: "actif_profil",
        include: [
          {
            model: Produit,
            as: "produit_actif"
          }
        ]
      },
      {
        model: Conseil,
        as: "conseil_profil"
      }
    ]
   })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Profil."
      });
    });
};