const addAcount = document.body.querySelector("#group-id-input-form");

addAcount.addEventListener("submit", async (event) => {
  event.preventDefault();

  const group_id = +document.querySelector("#add-group-id").value;

  try {
    const response = await fetch("http://localhost:5100/accounts", {
      method: "POST",
      body: JSON.stringify({
        group_id: group_id,
      }),
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Group added");
    }

    if (!response.ok || response.status >= 400) {
      const data = await response.json();
      alert(data.error || data.statusText);
    }
  } catch (error) {
    console.error({ error });
  }
});
