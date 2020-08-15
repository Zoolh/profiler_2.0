module.exports = app => {
    const typeGestion = require("../controllers/typeGestion.controller");
  
    var router = require("express").Router();
    
    router.get("/", typeGestion.findAll);
   
    router.get("/:id", typeGestion.findById);
  
    app.use('/api/typesGestion', router);
  };