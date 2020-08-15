module.exports = (sequelize, Sequelize) => {
    const Actif = sequelize.define("actif", {
      libelle: {
        type: Sequelize.STRING
      },
      ponderation: {
        type: Sequelize.STRING
      }
    })

    return Actif;
  };