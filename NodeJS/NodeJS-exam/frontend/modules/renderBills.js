import { getBills } from "./getBills.js";

const bills = await getBills();

const renderBills = async () => {
  const billsTBody = document.getElementById("bills-table-body");
  billsTBody.replaceChildren();

  bills.forEach((bill) => {
    const { id, description, amount } = bill;

    const billsCard = document.createElement("tr");
    const billsId = document.createElement("td");
    const billsDescription = document.createElement("td");
    const billsAmount = document.createElement("td");

    billsId.textContent = id;
    billsDescription.textContent = description.toLocaleUpperCase();
    billsAmount.textContent = `$ ${amount}`;

    billsCard.append(billsId, billsDescription, billsAmount);
    billsTBody.append(billsCard);
  });
};

await renderBills();

export { renderBills };
