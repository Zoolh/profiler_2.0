const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  // port: 3308,
  port: 5432,
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  //   keepAlive: true,
  // },
  // ssl: true,
  define: {
    timestamps: false,
  },
  define: {
    freezeTableName: true,
    updatedAt: false,
    createdAt: false
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.section = require("./section.model")(sequelize, Sequelize);
db.question = require("./question.model.js")(sequelize, Sequelize);
db.proposition = require("./proposition.model.js")(sequelize, Sequelize);
db.profil = require("./profil.model")(sequelize, Sequelize);
db.actif = require("./actif.model")(sequelize, Sequelize);
db.produit = require("./produit.model")(sequelize, Sequelize);
db.conseil = require("./conseil.model")(sequelize, Sequelize);
db.typeGestion = require("./typeGestion.model")(sequelize, Sequelize);
db.supportInv = require("./supportInv.model")(sequelize, Sequelize);

db.section.hasMany(db.question)
db.question.hasMany(db.proposition)


db.profil.belongsToMany(db.actif, {
  through: "TL_profil_actif",
  as: "actif_profil",
  foreignKey: "profil_id",
})
db.actif.belongsToMany(db.profil, {
  through: "TL_profil_actif",
  as: "profil_actif",
  foreignKey: "actif_id",
})


db.profil.belongsToMany(db.conseil, {
  through: "TL_profil_conseil",
  as: "conseil_profil",
  foreignKey: "profil_id",
})
db.conseil.belongsToMany(db.profil, {
  through: "TL_profil_conseil",
  as: "profil_conseil",
  foreignKey: "conseil_id",
})


db.produit.belongsToMany(db.actif, {
  through: "TL_actif_produit",
  as: "actif_produit",
  foreignKey: "produit_id",
})
db.actif.belongsToMany(db.produit, {
  through: "TL_actif_produit",
  as: "produit_actif",
  foreignKey: "actif_id",
})

db.proposition.belongsToMany(db.supportInv, {
  through: "TL_proposition_support",
  as: "support_proposition",
  foreignKey: "proposition_id",
})
db.supportInv.belongsToMany(db.proposition, {
  through: "TL_proposition_support",
  as: "proposition_support",
  foreignKey: "supportInv_id",
})




module.exports = db;
