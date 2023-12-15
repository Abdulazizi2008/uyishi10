const todosDiv = document.querySelector(".cards.albums");

async function fetchAlbum() {
  let id = JSON.parse(localStorage.getItem("userId"));

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayAlbums(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchAlbum();

function displayAlbums(albums) {
  let str = "";

  albums.map((album) => {
    str += `
      <div class='card'>
        <h2>Title: ${album.id}</h2>
        <h2>Body: ${album.title}</h2>
        <a class="ggg" href="#" >Photos</a>
      </div>
    `;
  });
}
