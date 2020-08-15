module.exports = app => {
    const proposition = require("../controllers/proposition.controller");
  
    var router = require("express").Router();
    
    router.get("/getByQuestions", proposition.findByIdQuestion);

    router.get("/", proposition.findAll);
  
    app.use('/api/propositions', router);
  };