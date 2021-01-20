const db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/authors", (req, res) => {
    db.Author.findAll({}).then(dbAuthor => {
      res.json(dbAuthor);
    });
  });

  app.get("/api/authors/:id", (req, res) => {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbAuthor => {
      res.json(dbAuthor);
    });
  });

  app.post("/api/pets", (req, res) => {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Pet.create(req.body).then(dbAuthor => {
      res.json(dbPet);
    });
  });

  app.delete("/api/pets/:id", (req, res) => {
    // Delete the Author with the id available to us in req.params.id
    db.Pet.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbPet => {
      res.json(dbPet);
    });
  });
};
