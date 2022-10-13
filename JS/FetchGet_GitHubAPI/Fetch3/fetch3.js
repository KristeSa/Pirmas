//Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir
//atvaizduokite lentelėje: vardą, plusOne ir attending.
//Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

const addToTable = (guests) => {
  const tbody = document.querySelector("tbody");
  guests.forEach((guest) => {
    const guestName = document.createElement("td");
    guestName.textContent = guest.name;

    const guestPlusOne = document.createElement("td");
    guestPlusOne.textContent = guest.plusOne ? "+" : "-";

    const guestAttending = document.createElement("td");
    guestAttending.textContent = guest.attending ? "+" : "-";

    const tr = document.createElement("tr");
    tr.append(guestName, guestPlusOne, guestAttending);
    tbody.append(tr);
  });
};

const doFetch = async () => {
  try {
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
    );
    if (response.ok) {
      const guests = await response.json();
      addToTable(guests);
    }
  } catch (error) {
    console.error(error);
  }
};

doFetch();
