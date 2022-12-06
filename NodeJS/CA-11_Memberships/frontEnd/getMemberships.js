const memberships = [];

const membershipCard = document.getElementById("membership-card");

const doFetch = async () => {
  const getMemberships = async () => {
    try {
      const response = await fetch("http://localhost:5040/memberships");
      const memberships = await response.json();
      console.log(memberships);
      return memberships;
    } catch (error) {
      console.error(error);
    }
  };

  await getMemberships();

  // const renderMemberships = (memberships) => {

  //   //membershipCard.innerHTML = "";

  memberships.forEach((membership) => {
    const price = document.createElement("h3");
    //console.log(price);
    const name = document.createElement("h3");
    const description = document.createElement("p");

    price.innerHTML = membership.price;
    name.innerHTML = membership.name;
    const stringifyPrice = price.innerHTML;
    const stringifyName = name.innerHTML;
    description.innerHTML = membership.description;

    const priceLine = `$ ${stringifyPrice} ${stringifyName}`;

    membershipCard.append(priceLine, description);
  });
};

doFetch();
