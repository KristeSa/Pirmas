import { getBills } from "./getBills.js";

const bills = await getBills();

const renderBills = async () => {
  const billsContent = document.getElementById("bills-content");
  billsContent.replaceChildren();

  bills.forEach((bill) => {
    const { id, amount, description } = bill;

    const billsCard = document.createElement("div");
    const billsId = document.createElement("h3");
    const billsAmount = document.createElement("p");
    const billsDescription = document.createElement("p");

    billsId.textContent = id;
    billsAmount.textContent = amount;
    billsDescription.textContent = description;

    billsCard.classList.add("bills-card");

    billsCard.append(billsId, billsAmount, billsDescription);
    billsContent.append(billsCard);
  });
};

await renderBills();

export { renderBills };
