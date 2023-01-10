import { renderTutorials } from "./renderTutorials.js";

async function getTutorials() {
  try {
    const response = await fetch("http://localhost:5100/v1/tutorials/", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const tutorials = await response.json();

    if (response.status >= 400) {
      alert("Please login");
      return window.location.assign(`./login.html`);
    }

    return tutorials;
  } catch (err) {
    console.error(err);
  }
}

const tutorials = await getTutorials();

export { getTutorials };
