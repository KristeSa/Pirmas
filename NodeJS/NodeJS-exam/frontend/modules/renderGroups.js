import { getAccounts } from "./getAccounts.js";

const accounts = await getAccounts();

const renderGroups = async () => {
  const groupContent = document.getElementById("group-content");
  groupContent.replaceChildren();

  accounts.forEach((group) => {
    const id = +group.group_id;
    const name = group.name;

    const groupCard = document.createElement("div");
    const groupId = document.createElement("h2");
    const groupName = document.createElement("p");

    groupId.textContent = `ID: ${id}`;
    groupName.textContent = name;

    groupCard.classList.add("group-card");
    groupId.classList.add("group_id");

    groupCard.append(groupId, groupName);
    groupContent.append(groupCard);

    groupId.addEventListener("click", () => {
      const route = location.pathname;
      const redirectRoute = route.replace(
        "groups.html",
        `bills.html?group_id=${id}`
      );
      location.assign(redirectRoute);
    });
  });
};

await renderGroups();

export { renderGroups };
