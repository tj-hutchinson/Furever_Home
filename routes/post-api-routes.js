const db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/pets", (req, res) => {
    db.Pet.findAll({}).then(dbPet => {
      res.json(dbPet);
    });
  });

  app.get("/api/pets/:id", (req, res) => {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Pet.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbPet => {
      res.json(dbPet);
    });
  });

  app.post("/api/pets", (req, res) => {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Pet.create(req.body).then(dbPet => {
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
