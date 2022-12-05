let users = [];

const userCard = document.querySelector(".user-card");

const getUsers = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5040/users");
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
  }
};

getUsers();

function showUsers(users) {
  users.forEach((user) => {
    const name = document.createElement("h5");
    const surname = document.createElement("h5");
    const email = document.createElement("p");
    const membership = document.createElement("p");

    name.innerHTML = user.name;
    surname.innerHTML = user.surname;
    email.innerHTML = user.email;
    membership.innerHTML = user.service_id;

    const userName = `${name} ${surname}`;

    userCard.append(userName, email, membership);
  });
}

showUsers(users);
