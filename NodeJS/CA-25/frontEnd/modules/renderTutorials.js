import { getTutorials } from "./getTutorials.js";

const tutorials = await getTutorials();

const renderTutorials = async () => {
  const tutorialsContent = document.getElementById("content");
  tutorialsContent.replaceChildren();

  tutorials.forEach((tutorial) => {
    const { user_id, title, content } = tutorial;

    const tutorialCard = document.createElement("div");
    const tutorialUserId = document.createElement("h3");
    const tutorialTitle = document.createElement("h2");
    const tutorialContent = document.createElement("p");

    tutorialUserId.textContent = user_id;
    tutorialTitle.textContent = title;
    tutorialContent.textContent = content;

    tutorialCard.append(tutorialUserId, tutorialTitle, tutorialContent);
    tutorialsContent.append(tutorialCard);
  });
};

await renderTutorials();

export { renderTutorials };
