// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
$(document).ready(() => {
  // when user clicks add-btn
  $("#add-btn").on("click", event => {
    event.preventDefault();

    // make a newCharacter obj
    const newPet = {
      // name from name input
      name: $("#name")
        .val()
        .trim(),
      // role from role input
      description: $("#description")
        .val()
        .trim(),
      breed: $("#breed")
        .val()
        .trim(),
      // age from age input
      age: $("#age")
        .val()
        .trim(),
      gender: $("#gender")
        .val()
        .trim(),
      // points from force-points input
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
  });
});