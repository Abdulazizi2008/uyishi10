async function fetchAlbum() {
  let id = JSON.parse(localStorage.getItem("userId"));
  spanHeading.innerHTML = id;
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayAlbums(filteredData);
  } catch (error) {
    console.log(error);
  }
}
