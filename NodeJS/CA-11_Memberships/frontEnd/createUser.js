const selectMembership = document.querySelector("#memberships");
const memberships = [];

const getMemberships = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5040/memberships");
    const memberships = await response.json();
    console.log(memberships);
    return memberships;
  } catch (error) {
    console.error(error);
  }
};
getMemberships();

const populateMemberships = (memberships) => {
  memberships.forEach((membership) => {
    const newMembership = document.createElement("option");
    newMembership.innerHTML = membership.name;
    selectMembership.appendChild(newMembership);
  });
};
populateMemberships(memberships);

const addUser = document.querySelector("form");

addUser.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("#first-name").value.trim();
  const surname = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const selectedMembership = document.querySelector("#membership").value;

  const newUser = { name, surname, email, selectedMembership };

  const response = await fetch("http://127.0.0.1:5040/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  if (response.ok) {
    try {
      const successText = document.createElement("p");
      successText.textContent = "Sėkmingai pateikėte duomenis";
      document.body.append(successText);
    } catch (error) {
      console.error(error);
    }
  }
});

const clearUserForm = document.getElementById("cancel");

clearUserForm.addEventListener("click", (event) => {
  addUser.innerHTML = " ";
});
