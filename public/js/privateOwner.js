// When the page loads, grab all of our chirps
$(document).ready(() => {
  $.get("/privatePets", results => {
    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
      const row = $("<div>");
      row.addClass("allPets").addClass("card");
      row.attr("id", "post-number-" + i);
      $("#chirp-area").prepend(row);
      $("#post-number-" + i).append(
        "<h2 class='card-header'>Name: " + results[i].name + "</h2>"
      );
      $("#post-number-" + i).append(
        "<p>Description: " + results[i].description + "</p>"
      );
      $("#post-number-" + i).append("<p>Breed: " + results[i].breed + "</p>");
      $("#post-number-" + i).append("<p>Age: " + results[i].age + "</p>");
      $("#post-number-" + i).append("<p>Gender: " + results[i].gender + "</p>");
      $("#post-number-" + i).append(
        "<p>Location: " + results[i].location + "</p>"
      );
      // $("#post-number-" + i).append(
      //   "<p>On " + new Date(results[i].created_at).toLocaleDateString() + "</p>"
      // );
      $("#post-number-" + i).append("<p>On " + results[i].createdAt + "</p>");
    }
  });
});
