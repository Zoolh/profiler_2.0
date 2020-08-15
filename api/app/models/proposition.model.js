module.exports = (sequelize, Sequelize) => {
    const Proposition = sequelize.define("proposition", {
      libelle: {
        type: Sequelize.STRING
      },
      pointsProfil: {
        type: Sequelize.INTEGER
      },
      pointsTypeGestion: {
        type: Sequelize.INTEGER
      }
    });
  
    return Proposition;
  };