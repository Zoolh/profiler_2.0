module.exports = (sequelize, Sequelize) => {
    const SupportInv = sequelize.define("supportInv", {
      libelle: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    });

    return SupportInv;
  };