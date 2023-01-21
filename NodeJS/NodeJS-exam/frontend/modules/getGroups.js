import { renderGroups } from "./renderAllGroups.js";

async function getGroups() {
  try {
    const response = await fetch(`http://localhost:5100/groups`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const groups = await response.json();

    if (!response.ok || response.status >= 400) {
      alert("Please login");
      return window.location.assign(`./login.html`);
    }

    return groups;
  } catch (error) {
    console.error({ error });
  }
}

await renderGroups();

await getGroups();

export { getGroups };
