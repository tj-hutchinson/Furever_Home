// Code here handles what happens when a user submits a new pet on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
$(document).ready(() => {
  // when user clicks add-btn
  $("#add-btn").on("click", event => {
    event.preventDefault();

    // make a newPet obj
    const newPet = {
      // name from name input
      name: $("#name")
        .val()
        .trim(),
      // description from description input
      description: $('#description')
        .val()
        .trim(),
      // breed from breed input
      breed: $("#breed")
        .val()
        .trim(),
      // age from age input
      age: $("#age")
        .val()
        .trim(),
      // gender from gender input
      gender: $("#gender")
        .val()
        .trim(),
      // location from location input
      location: $("#location")
        .val()
        .trim()
    };

    // send an AJAX POST-request with jQuery
    $.post("/api/new", newPet)
      // on success, run this callback
      .then(data => {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding pet...");
      });

    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#body").val("");
    $("#description").val("");
    $("#breed").val("");
    $("#age").val("");
    $("#gender").val("");
    $("#location").val("");

    // redirect to /privateOwner
    $.get("/privateOwner", isAuthenticated, (req, res) => {
      res.render("privateOwner", {});
    });
  });
});
