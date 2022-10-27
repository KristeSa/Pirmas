/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
import { getUsers } from "./modules/getUsers.js";

const users = await getUsers();

document.querySelector("#btn").addEventListener("click", () => {
  const usersOutput = document.querySelector("#output");
  const message = document.querySelector("#message");

  function showUsers(users) {
    users.forEach((user) => {
      const userLogin = document.createElement("p");
      const userAvatar = document.createElement("img");
      const userCard = document.createElement("div");

      userLogin.textContent = user.login;
      userAvatar.src = user.avatar_url;
      message.innerHTML = "";
      userLogin.setAttribute("id", "user-login");
      userAvatar.setAttribute("id", "user-avatar");
      userCard.setAttribute("id", "user-card");

      userCard.append(userLogin, userAvatar);
      usersOutput.append(userCard);
    });
  }
  showUsers(users);
});
