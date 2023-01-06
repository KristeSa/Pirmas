import { getArticles } from "./getArticles.js";

const articles = await getArticles();

const renderArticles = async () => {
  const articlesContent = document.getElementById("content");
  articlesContent.replaceChildren();

  articles.forEach((article) => {
    const { date, title, content } = article;
    console.log(date, title);

    const articleCard = document.createElement("div");
    const articleDate = document.createElement("h3");
    const articleTitle = document.createElement("h2");
    const articleContent = document.createElement("p");

    articleDate.textContent = date.toLocaleString().slice(0, 10);
    articleTitle.textContent = title;
    articleContent.textContent = content;

    articleCard.append(articleDate, articleTitle, articleContent);
    articlesContent.append(articleCard);
  });
};

await renderArticles();

renderArticles();

export { renderArticles };
