const todosDiv = document.querySelector(".cards.posts");
const spanHeading = document.querySelector(".heading1 span");

async function fetchPosts() {
  let id = JSON.parse(localStorage.getItem("userId"));
  spanHeading.innerHTML = id;
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayPosts(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

function displayPosts(posts) {
  let str = "";

  posts.map((posts) => {
    str += `
      <div class='card'>
        <h2>Title: ${posts.title}</h2>
        <h2>Body: ${posts.body}</h2>
        <a class="ggg" href="/pages/comments.html" )>Comments</a>
      </div>
    `;
  });

  todosDiv.innerHTML = str;
}
