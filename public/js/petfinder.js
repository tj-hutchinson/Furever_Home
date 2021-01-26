//get document ready
$(document).ready(() => {
  const pf = new petfinder.Client({
    apiKey: "npUvuNjLj8hvCc6FwTaVD70LxfrPd91k6ovd82KVYrDnWXW0LW",
    secret: "OzlHCv360zKbVtPXQKnsPhhRZmLBH8WoMPFK55BA"
  });

  pf.animal.search().then(response => {
    // Do something with `response.data.animals`
    console.log(response);
    response.data.animals
      .forEach(animal => {
        console.log(` -- ${animal.name} id: ${animal.id} url: ${animal.url}`);

        for (let i = 0; i < response.data.animals.length; i++) {
          const row = $("<div>");
          row.addClass("allPets");
          row.attr("id", "post-number-" + i);
          $("#shelter-area").prepend(row);
          $("#post-number-" + i).append(
            "<h2>" + response.data.animals[i].type + "</h2>"
          );
          $("#post-number-" + i).append(
            "<p>" + response.data.animals[i].name + "</p>"
          );
          $("#post-number-" + i).append(
            "<p>" + response.data.animals[i].description + "</p>"
          );
          $("#post-number-" + i).append(
            "<p>" +
              "Primary: " +
              response.data.animals[i].breeds.primary +
              ", Secondary: " +
              response.data.animals[i].breeds.primary +
              "</p>"
          );
          $("#post-number-" + i).append(
            "<p>" + response.data.animals[i].age + "</p>"
          );
          $("#post-number-" + i).append(
            "<p>" + response.data.animals[i].gender + "</p>"
          );
          $("#post-number-" + i).append(
            "<p>" + response.data.animals[i].contact.address.city + ", " + response.data.animals[i].contact.address.state +"</p>"
          );
        }
      })
      .catch(error => {
        // Handle the error
        console.log(error);
      });
  });
});
