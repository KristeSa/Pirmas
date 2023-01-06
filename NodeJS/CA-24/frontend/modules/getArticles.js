import { renderArticles } from "./app.js";

async function getArticles() {
  try {
    const response = await fetch("http://localhost:3000/v1/content/", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const articles = await response.json();

    if (response.status >= 400) {
      alert(content.error);
      return window.location.assign(`./login.html`);
    }

    return articles;
  } catch (err) {
    console.error(err);
  }
}

const articles = await getArticles();

export { getArticles };
