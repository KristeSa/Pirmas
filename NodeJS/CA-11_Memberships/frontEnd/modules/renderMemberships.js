import { fetchMemberships } from "./getMemberships.js";

<<<<<<< HEAD
const renderMemberships = () => {
  const membershipCard = document.getElementById("membership-card");
  membershipCard.textContent = " ";
=======
const renderMemberships = (memberships) => {
  const membershipCard = document.getElementById("membership-card");
  const deleteMembershipIcon = document.querySelector(".fa-trash");

  membershipCard.replaceChildren();
>>>>>>> a87aace (nauji failai)

  memberships.forEach((membership) => {
    const { _id, price, name, description } = membership;

    const membershipPrice = document.createElement("h3");
    const membershipName = document.createElement("h3");
    const membershipDescription = document.createElement("p");

    membershipPrice.innerHTML = price;
    membershipName.innerHTML = name;
    membershipDescription.innerHTML = description;
<<<<<<< HEAD
=======
    deleteMembershipIcon.id = _id;
>>>>>>> a87aace (nauji failai)

    const priceLine = `$ ${price} ${name}`;

    membershipCard.append(priceLine, membershipDescription);
<<<<<<< HEAD
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

=======

    const deleteMembership = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5040/membership/${deleteMembershipIcon.id}`,
          {
            method: "DELETE",
          }
        );

        const isMembershipDeleted = response.ok;

        if (isMembershipDeleted) {
          await fetchMemberships();
        }
      } catch (err) {
        console.log(err);
      }
    };
    deleteMembershipIcon.addEventListener("click", deleteMembership);
  });
};

>>>>>>> a87aace (nauji failai)
export { renderMemberships };
