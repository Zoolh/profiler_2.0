const db = require("../models");
const SupportInv = db.supportInv;
const Proposition = db.proposition;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {

  SupportInv.findAll({
    include: [
      {
        model: Proposition,
        as: "proposition_support"
      }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SupportInv."
      });
    });
};

exports.findById = (req, res) => {
  const idSupportInv = req.params.id;

  SupportInv.findByPk(idSupportInv, {
    include: [
      {
        model: Proposition,
        as: "proposition_support"
      }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SupportInv."
      });
    });
};

exports.findByIdProposition = (req, res) => {
  const idProposition = req.body.params.idProposition;

  SupportInv.findAll({
    include: [
      {
        model: Proposition,
        as: "proposition_support",
        where: {id: idProposition } 
        
      }
    ], 
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SupportInv."
      });
    });

}