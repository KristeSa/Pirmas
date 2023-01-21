const addBillForm = document.body.querySelector("#bill-input-form");

const getGroupId = () => {
  const params = new URL(document.location).searchParams;
  const group_id = parseInt(params.get("group_id"));
  return group_id;
};

const billGroupId = getGroupId();

addBillForm.addEventListener("submit", async (event) => {
  event.preventDefault();

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
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Bill successfully added");
    }

    if (!response.ok || response.status >= 400) {
      const data = await response.json();
      alert(data.error || data.statusText);
    }
  } catch (error) {
    console.error({ error });
  }
});
