function Person(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.addToTable = function (){
    const firstNameColumn = document.createElement("td");
    firstNameColumn.textContent = this.firstName;
    const lastNameColumn = document.createElement("td");
    lastNameColumn.textContent = this.lastName;
    const tr = document.createElement('tr');
    tr.append(firstNameColumn, lastNameColumn);
    document.querySelector('table > tbody').append(tr);
   }
}

const capitalize = (text) => text.charAt(0).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const [firstName, lastName] = fullname.split(' ').map(namePart => capitalize(namePart.trim()))

const person = new Person(firstName, lastName);
person.addToTable()
})
