module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("section", {
      libelle: {
        type: Sequelize.STRING
      }
    })

  

    return Section;
  };