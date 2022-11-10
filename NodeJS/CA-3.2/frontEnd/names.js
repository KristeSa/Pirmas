const list = document.querySelector(".name-list");

const doFetch = async () => {
  const showNames = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5050");
      const names = await response.json();

      return names;
    } catch (error) {
      console.error(error);
    }
  };

  const names = await showNames();
  names.forEach((name) => {
    const listItem = document.createElement("li");
    const firstName = document.createElement("p");
    const lastName = document.createElement("p");

    firstName.textContent = name.firstName;
    lastName.textContent = name.lastName;

    const fullName = `${firstName} ${lastName}`;

    console.log(fullName); // reikia paversti i stringa

    listItem.append(fullName);
    list.append(listItem);
  });
};

doFetch();
