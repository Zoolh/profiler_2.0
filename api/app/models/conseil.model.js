module.exports = (sequelize, Sequelize) => {
    const Conseil = sequelize.define("conseil", {
      libelle: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    });

    return Conseil;
  };