const addBillForm = document.body.querySelector("#bill-input-form");

addBillForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const billGroupId = +document.querySelector("#bill-group-id").value;
  const billAmount = +document.querySelector("#bill-amount").value;
  const billDescription = document
    .querySelector("#bill-description")
    .value.trim();

  try {
    const response = await fetch("http://localhost:5100/bills/", {
      method: "POST",
      body: JSON.stringify({
        group_id: billGroupId,
        amount: billAmount,
        description: billDescription,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Bill successfully added");
    }
  } catch (error) {
    console.error(error);
  }
});
