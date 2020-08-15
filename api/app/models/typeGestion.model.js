module.exports = (sequelize, Sequelize) => {
    const TypeGestion = sequelize.define("typeGestion", {
      libelle: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    });

    return TypeGestion;
  };