module.exports = app => {
    const question = require("../controllers/question.controller");
  
    var router = require("express").Router();
    
    // Retrieve all questions
    router.get("/", question.findAll);

    // Retrieve a single Question with id
    router.get("/:id", question.findOne);
  
    app.use('/api/questions', router);
  };