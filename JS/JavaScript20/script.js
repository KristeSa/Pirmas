document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
  const firstName = document.getElementById("name").value;
  const ageInput = document.getElementById("age").value;

  const isLegalAge = ageInput >= 18;

  const person = {
    name: firstName,
    isLegal: isLegalAge,
  }
  console.log(person);
});
