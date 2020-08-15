const db = require("../models");
const Proposition = db.proposition;
const Option = db.option;
const Op = db.Sequelize.Op;

exports.findByIdQuestion = (req, res) => {
  const idQuestion = req.query.id;

  Proposition.findAll({ where: {
      questionId : {
          [Op.eq]: idQuestion
        }
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving question."
      });
    });
};


exports.findAll = (req, res) => {
    const libelle = req.query.libelle;
    var condition = libelle ? { libelle: { [Op.like]: `%${libelle}%` } } : null;
  
    Proposition.findAll({ 
      where: condition
    })
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
