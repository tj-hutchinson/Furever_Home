// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("members");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });

  app.get("/privateOwner", isAuthenticated, (req, res) => {
    res.render("privateOwner", {});
  });

  app.get("/shelter", isAuthenticated, (req, res) => {
    res.render("shelter");
  });

  app.get("/addPet", isAuthenticated, (req, res) => {
    res.render("addPet");
  });
};
