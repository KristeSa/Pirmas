//Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką.
//Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.

const personInfo = {
    firstName: 'Kristina',
    lastName: 'Saveiko',
    definition: 'learner',
    photo: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg'
}

localStorage.setItem("person", JSON.stringify(personInfo));


const createPersonCard = (person) => {
    const img = document.createElement("img");
    img.style.width = "200px";
    img.style.src = person.photo;
    img.alt = `${person.firstName} ${person.lastName} photo`

    const title = document.createElement("h2");
    title.textContent = `${person.firstName} ${person.lastName}`

    const defin = document.createElement("p");
    defin.textContent = person.definition;

    const card = document.createElement("div")
    card.append(img, title, defin);
    document.body.append(card)
}

const showPerson = JSON.parse(localStorage.getItem("person"));
createPersonCard(showPerson);