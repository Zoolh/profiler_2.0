module.exports = app => {
    const profil = require("../controllers/profil.controller");
  
    var router = require("express").Router();
    
    router.get("/", profil.findAll);
   
    router.get("/:id", profil.findById);
  
    app.use('/api/profils', router);
  };