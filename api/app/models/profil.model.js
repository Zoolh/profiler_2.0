module.exports = (sequelize, Sequelize) => {
    const Profil = sequelize.define("profil", {
      libelle: {
        type: Sequelize.STRING
      },
      description: {
          type: Sequelize.TEXT
      },
      variation: {
        type: Sequelize.STRING
      },
      temps: {
        type: Sequelize.STRING
      }
    });

    return Profil;
  };