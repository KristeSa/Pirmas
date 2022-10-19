const formInput = document.querySelector("#form");

formInput.addEventListener("submit", async (event) => {
    event.preventDefault()

    const title = document.querySelector("#title").value.trim()
    const completed = document.querySelector("#completed").value.trim()
    
    const newItem = {title, completed}

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
  body: JSON.stringify(newItem),
});

if (response.ok) {
    const sucsessText = document.createElement("p")
    sucsessText.textContent = "Sėkmingai pateikėte duomenis"
    document.body.append(sucsessText)
}
    catch (error) {
      console.error(error);
        }
})

