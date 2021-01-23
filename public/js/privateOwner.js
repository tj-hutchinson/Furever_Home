// When the page loads, grab all of our chirps
$(document).ready(() => {
  $.get("/privatePets", results => {
    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
      const row = $("<div>");
      row.addClass("allPets");
      row.attr("id", "post-number-" + i);
      $("#chirp-area").prepend(row);
      $("post-number-" + i).append("<h2>" + results[i].description + "</h2>");
      $("post-number-" + i).append("<p>" + results[i].name + "</p>");
      $("post-number-" + i).append("<p>" + results[i].breed + "</p>");
      $("post-number-" + i).append("<p>" + results[i].age + "</p>");
      $("post-number-" + i).append("<p>" + results[i].gender + "</p>");
      $("post-number-" + i).append("<p>" + results[i].location + "</p>");
      $("post-number-" + i).append(
        "<p>On " + new Date(results[i].created_at).toLocaleDateString() + "</p>"
      );
    }
  });
});
