const usersDiv = document.querySelector(".cards.users");

async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    displayUsers(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

function displayUsers(users) {
  let str = "";

  users.map((user) => {
    str += `
      <div class='card'>
        <h2> ${user.name}</h2>
        <h2> ${user.id}</h2>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address}</p>
        <p>Phone number:${user.phone}</p>
        <div class="div">
        <a href="/pages/todos.html" onclick="getTodos(${user.id})">Todos</a>
        <a href="/pages/posts.html" onclick="getPosts(${user.id})">Posts</a>
        <a href="/pages/album.html" onclick="getAlbums(${user.id})">Albums</a>
        </div>
      </div>
    `;
  });

  usersDiv.innerHTML = str;
}

function getTodos(id) {
  localStorage.setItem("userId", JSON.stringify(id));
}
