import { getGroups } from "./getGroups.js";

const groups = await getGroups();

const renderGroups = async () => {
  const groupContent = document.getElementById("group-content");
  groupContent.replaceChildren();

  groups.forEach((group) => {
    const { id, name } = group;

    const groupCard = document.createElement("div");
    const groupId = document.createElement("h2");
    const groupName = document.createElement("p");

    groupId.textContent = `ID: ${id}`;
    groupName.textContent = name;

    groupCard.classList.add("group-card");
    groupId.setAttribute("id", "group-id");

    groupCard.append(groupId, groupName);
    groupContent.append(groupCard);

    document.getElementById("group-id").addEventListener("click", () => {
      //const groupIdButton = e.target.textContent;
      const route = location.pathname;
      const redirectRoute = route.replace(
        "groups.html",
        `bills.html?${groupId.id}`
      );
      location.assign(redirectRoute);

      console.log(groupId.id);
    });
  });
};
await renderGroups();

export { renderGroups };
