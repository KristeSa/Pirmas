const addPageHeader = () => {
  const pageHeader = document.querySelector("#page-top");
  pageHeader.style =
    "height: 400px; background-color:blueviolet; border: 1px solid black";
  pageHeader.innerHTML = "This is header";
};

export { addPageHeader };
