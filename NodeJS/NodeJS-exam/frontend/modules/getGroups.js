import { renderGroups } from "./renderGroups.js";

renderGroups;

async function getGroups() {
  try {
    const response = await fetch("http://localhost:5100/groups", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const groups = await response.json();

    if (response.status >= 400) {
      alert("Please login");
      return window.location.assign(`./login.html`);
    }

    return groups;
  } catch (err) {
    console.error(err);
  }
}

await getGroups();

export { getGroups };
