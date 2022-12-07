const getMemberships = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5040/memberships");
    const memberships = await response.json();

    return memberships;
  } catch (error) {
    console.error(error);
    throw Error({ error });
  }
};

const populateMemberships = async () => {
  const memberships = await getMemberships();

  const selectMembership = document.querySelector("#memberships");
  selectMembership.replaceChildren();

  memberships.forEach((membership) => {
    const name = membership;
    const newMembership = document.createElement("option");
    newMembership.value = name;
    newMembership.innerHTML = name;

    selectMembership.append(newMembership);
  });
};

await populateMemberships();

const addUser = document.querySelector("form");

const newUser = async () => {
  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const selectedMembership = document.querySelector("#membership").value;

  const newUser = { firstName, lastName, email, selectedMembership };

  const response = await fetch("http://127.0.0.1:5040/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  if (response.ok) {
    try {
      alert("Sėkmingai pateikėte duomenis");
      addUser.reset();
    } catch (error) {
      console.error(error);
    }
  }
};

addUser.addEventListener("submit", async (event) => {
  event.preventDefault();

  await newUser();
});

const clearUserForm = document.getElementById("cancel");
clearUserForm.addEventListener("click", () => {
  addUser.reset();
});
