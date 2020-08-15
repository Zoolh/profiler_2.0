module.exports = app => {
    const actif = require("../controllers/actif.controller");
  
    var router = require("express").Router();
    
    router.get("/", actif.findAll);
   
    router.get("/:id", actif.findById);

    router.post("/getByProfilId", actif.findByIdProfil);
  
    app.use('/api/actifs', router);

  };