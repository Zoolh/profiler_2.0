module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
      libelle: {
        type: Sequelize.STRING
      }
    })

    return Produit;
  };