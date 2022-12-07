const getMemberships = async () => {
  try {
    const response = await fetch("https://localhost:5040/memberships");
    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};

function showMemberships(memberships) {
  users.forEach((membership) => {
    const price = document.createElement("h3");
    const name = document.createElement("h3");
    const description = document.createElement("p");

    price.textContent = membership.price;
    name.textContent = membership.name;
    description.textContent = membership.description;

    userLogin.setAttribute("id", "user-login");
    userAvatar.setAttribute("id", "user-avatar");
    userCard.setAttribute("id", "user-card");

    userCard.append(userLogin, userAvatar);
    usersOutput.append(userCard);
  });
}
getMemberships();

showUsers(users);
