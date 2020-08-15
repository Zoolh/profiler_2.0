module.exports = app => {
    const section = require("../controllers/section.controller");
  
    var router = require("express").Router();
    
    // Retrieve all sections
    router.get("/", section.findAll);

    // Retrieve a single section with id
    router.get("/:id", section.findOne);
  
    app.use('/api/sections', router);
  };