const db = require("../models");
const TypeGestion = db.typeGestion;


exports.findAll = (req, res) => {

    TypeGestion.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TypeGestion."
      });
    });
};

exports.findById = (req, res) => {
  const idTypeGestion = req.params.id;

  TypeGestion.findByPk(idTypeGestion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TypeGestion."
      });
    });
};