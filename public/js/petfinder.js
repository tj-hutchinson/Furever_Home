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
      })
      .catch(error => {
        // Handle the error
        console.log(error);
      });
  });
});
