//get document ready
$(document).ready(() => {
  const pf = new petfinder.Client({
    apiKey: "npUvuNjLj8hvCc6FwTaVD70LxfrPd91k6ovd82KVYrDnWXW0LW",
    secret: "OzlHCv360zKbVtPXQKnsPhhRZmLBH8WoMPFK55BA"
  });

  pf.animal
    .search()
    .then(response => {
      response.data.animals;

      for (let i = 0; i < 10; i++) {
        const row = $("<div>");
        row.addClass("allPets").addClass("card");
        $("#card").append("class=" + response.data.animals[i].url);
        row.attr("id", "post-number-" + i);
        row.attr("src", response.data.animals[i].url);
        $("#shelter-area").prepend(row);
        $("#post-number-" + i).append(
          "<h2 class='card-header'>" + response.data.animals[i].type + "</h2>"
        );
        $("#post-number-" + i).append(
          "<p>Name: " + response.data.animals[i].name + "</p>"
        );
        $("#post-number-" + i).append(
          "<p>Description: " + response.data.animals[i].description + "</p>"
        );
        $("#post-number-" + i).append(
          "<p>" +
            "Primary: " +
            response.data.animals[i].breeds.primary +
            "<br> Secondary: " +
            response.data.animals[i].breeds.primary +
            "</p>"
        );
        $("#post-number-" + i).append(
          "<p>Age: " + response.data.animals[i].age + "</p>"
        );
        $("#post-number-" + i).append(
          "<p>Gender: " + response.data.animals[i].gender + "</p>"
        );
        //this line makes the entire card a link, wasn't able to get it to work at the bottom of this so I put it here and everything seems to work.
        $("#post-number-" + i).append(`
        <a href="${response.data.animals[i].url}" class="stretched-link"></a>`);
        $("#post-number-" + i).append(
          "<p>City: " +
            response.data.animals[i].contact.address.city +
            "<br>State: " +
            response.data.animals[i].contact.address.state +
            "</p>"
        );
        if (response.data.animals[i].primary_photo_cropped !== null) {
          $("#post-number-" + i).append(
            "<img class='h-25 w-25' src=" +
              response.data.animals[i].primary_photo_cropped.small +
              ">"
          );
        } else {
          $("#post-number-" + i).append(
            "<img class='h-25 w-25>"
          );
        }
      }
    })
    .catch(error => {
      // Handle the error
      console.log(error);
    });
});
