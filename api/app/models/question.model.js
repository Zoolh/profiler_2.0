module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
      libelle: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      }
    })

  

    return Question;
  };