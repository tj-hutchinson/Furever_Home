// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", (req, res) => {
    // Take the request...
    const pet = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    const routeName = pet.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    db.Pet.create({
      routeName: routeName,
      name: pet.name,
      description: pet.description,
      breed: pet.breed,
      age: pet.age,
      gender: pet.gender,
      location: pet.location
    }).catch(err => {
      res.status(401).json(err);
    });
  });

  app.get("/privatePets", (req, res) => {
    db.Pet.findAll({}).then(results => {
      res.json(results);
    });
  });
};
