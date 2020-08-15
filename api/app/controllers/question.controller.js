const db = require("../models");
const Question = db.question;
const Op = db.Sequelize.Op;

// Retrieve all Question from the database.
exports.findAll = (req, res) => {
  const libelle = req.query.libelle;
  var condition = libelle ? { libelle: { [Op.like]: `%${libelle}%` } } : null;

  Question.findAll({ where: condition })
    .then(data => {
      res.send(data);
      console.log('TEST')
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving question."
      });
    });
};

// Find a single Question with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Question.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Question with id=" + id
        });
      });

  };