import { renderGroups } from "./renderGroups.js";

async function getAccounts() {
  try {
    const response = await fetch(`http://localhost:5100/accounts`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const accounts = await response.json();

    if (response.status >= 400) {
      alert("Please login");
      return window.location.assign(`./login.html`);
    }

    return accounts;
  } catch (error) {
    console.error({ error });
  }
}

await getAccounts();

await renderGroups();

export { getAccounts };
