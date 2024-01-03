let getBtn = document.getElementById("fetchUser");
let userDisplay = document.getElementById("userDisplay");
let userInfo = document.getElementById("userInfo");
let displayUserBtn = document.getElementById("displayUserBtn");
getBtn.addEventListener("click", getUsersList);

function getUsersList() {
  userDisplay.innerHTML = "";
  getBtn.style.display = "none";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        userDisplay.innerHTML += `
            <div class="userCard">
                <h5>${user.name}</h5>
                <button id="displayUserBtn" onClick=userDetails(${user.id})>View</button>      
            </div>
            `;
      });
    });;
}

function userDetails(index) {
  userInfo.innerHTML = "";
  fetch(`https://jsonplaceholder.typicode.com/users?id=${index}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      userInfo.innerHTML += `
      <h3>UserName: ${data[0].username}</h3>
      <h3>Name: ${data[0].name}</h3>
      <h3>Address: ${data[0].address.street},${data[0].address.suite},${data[0].address.city}. </h3>
      <h3>Email: ${data[0].email}</h3>

        `;
    });
}

function userDelete(index) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${index}`, {
    method: "DELETE",
  });
}
