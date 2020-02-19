const submitUser = document.querySelector("#submitUser");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const submitTodo = document.querySelector("#submitTodo");
const userID = document.querySelector("#userID");
const user = document.querySelector("#user");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const status = document.querySelector("#status");

const postUser = () => {
  fetch("users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value
    })
  });
  console.log("user submited");
};

const postTodo = () => {
  fetch("todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userID: userID.value,
      user: user.value,
      title: title.value,
      description: description.value,
      status: status.value
    })
  });
  console.log("todo submited");
};

submitUser.addEventListener("submit", postUser);
submitTodo.addEventListener("submit", postTodo);
