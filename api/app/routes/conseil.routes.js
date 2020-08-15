module.exports = app => {
    const conseil = require("../controllers/conseil.controller");
  
    var router = require("express").Router();
    
    router.get("/", conseil.findAll);
   
    router.get("/:id", conseil.findById);
  
    app.use('/api/conseils', router);
  };