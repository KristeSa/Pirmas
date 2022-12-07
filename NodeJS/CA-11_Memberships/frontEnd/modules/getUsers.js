let sortOrder = "ASC";

const showUsers = (users) => {
  const userCard = document.querySelector(".user-card");
  userCard.replaceChildren();

  users.forEach((user) => {
    const userContainer = document.createElement("div");
    const userName = document.createElement("h5");
    const userEmail = document.createElement("p");
    const userMembership = document.createElement("p");

    const { name, surname, email, service_id } = user;

    userName.textContent = `${name} ${surname}`;
    userEmail.textContent = `Email adress: ${email}`;
    userMembership.innerHTML = `${service_id}`;

    userContainer.append(userName, userEmail, userMembership);
    userCard.append(userCard);
  });
};

const getUsers = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:5040/users/${sortOrder}`);
    const users = await response.json();

    await showUsers(users);
    console.log(users);
  } catch (error) {
    console.error(error);
  }
};

getUsers();

document.querySelector(".fa-sort").addEventListener("click", (e) => {
  const text = e.target.textContent;
  if (text.includes("ASC")) {
    e.target.textContent = text.replace("ASC", "DSC");
    sortOrder = "DSC";
  } else {
    e.target.textContent = text.replace("DSC", "ASC");
    sortOrder = "ASC";
  }
  getUsers();
});
