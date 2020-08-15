module.exports = app => {
    const supportInv = require("../controllers/supportInv.controller");
  
    var router = require("express").Router();
    
    router.get("/", supportInv.findAll);
    
    router.post("/getByPropositionId", supportInv.findByIdProposition);

    router.get("/:id", supportInv.findById);
    
  
    app.use('/api/supportsInv', router);
  };