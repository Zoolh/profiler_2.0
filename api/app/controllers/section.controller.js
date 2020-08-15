const db = require("../models");
const Section = db.section;
const Op = db.Sequelize.Op;

// Retrieve all Section from the database.
exports.findAll = (req, res) => {
  const libelle = req.query.libelle;
  var condition = libelle ? { libelle: { [Op.like]: `%${libelle}%` } } : null;

  Section.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Section."
      });
    });
};

// Find a single Section with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Section.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Section with id=" + id
        });
      });

  };