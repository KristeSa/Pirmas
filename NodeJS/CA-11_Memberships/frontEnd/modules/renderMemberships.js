import { fetchMemberships } from "./getMemberships.js";

const renderMemberships = () => {
  const membershipCard = document.getElementById("membership-card");
  membershipCard.textContent = " ";

  memberships.forEach((membership) => {
    const { _id, price, name, description } = membership;

    const membershipPrice = document.createElement("h3");
    const membershipName = document.createElement("h3");
    const membershipDescription = document.createElement("p");

    membershipPrice.innerHTML = price;
    membershipName.innerHTML = name;
    membershipDescription.innerHTML = description;

    const priceLine = `$ ${price} ${name}`;

    membershipCard.append(priceLine, membershipDescription);
  });
};

// const deleteMembership = async () => {
//   try {
//     const response = await fetch(
//       `http://localhost:5000/membership/${deleteMembershipButton.id}`, // reikia aprasyti si mygtuka
//       {
//         method: "DELETE",
//       }
//     );

//     const isPostDeleted = response.ok;

//     if (isPostDeleted) {
//       await getMemberships();
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// deleteMembershipButton.addEventListener("click", deleteMembership);

export { renderMemberships };
