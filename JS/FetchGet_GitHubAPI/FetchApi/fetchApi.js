//class Person {
// constructor(img, fullName, age, email) {
//   this.img = img;
//   this.fullName = fullName;
//   this.age = age;
//   this.email = email;
// }
//}
const createUserCard = (user) => {
  const userCard = document.createElement("div");
  userCard.style = "background: grey; height: 500px; width: 300px";
  document.body.append(userCard);

  const userPhoto = document.createElement("img");
  userPhoto.src = user.picture.large;

  const userName = document.createElement("h3");
  userName.textContent = `${user.name.first} ${user.name.last}, ${user.dob.age}`;

  const userEmail = document.createElement("h4");
  userEmail.textContent = user.email;

  userCard.append(userPhoto, userName, userEmail);
};

const doFetch = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (response.ok) {
      const data = await response.json();
      createUserCard(data.results[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

await doFetch();
