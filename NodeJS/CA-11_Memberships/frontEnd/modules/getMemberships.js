import { renderMemberships } from "./renderMemberships.js";

const fetchMemberships = async () => {
  try {
    const response = await fetch("http://localhost:5040/memberships");
    const memberships = await response.json();

    renderMemberships(memberships);
  } catch (error) {
    console.error(error);
  }
};

await fetchMemberships();

export { fetchMemberships };
