//let memberships = [];

function showMemberships(memberships) {
  const membershipCard = document.getElementById("membership-card");
  membershipCard.innerHTML = "";

  memberships.forEach((membership) => {
    const price = document.createElement("h3");
    const name = document.createElement("h3");
    const description = document.createElement("p");

    price.innerHTML = membership.price;
    name.innerHTML = membership.name;
    description.innerHTML = membership.description;

    const priceLine = `"$" ${price} ${name}`;

    membershipCard.append(priceLine, description);
  });
}

const getMemberships = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5040/memberships");
    const memberships = await response.json();
    console.log(memberships);
    await showMemberships(memberships);
  } catch (error) {
    console.error(error);
  }
};

getMemberships();
