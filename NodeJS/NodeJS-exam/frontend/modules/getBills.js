import { renderBills } from "./renderBills";

async function getBills() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  try {
    const response = await fetch(`http://localhost:5100/bills/${id}`);
    const bills = await response.json();

    await renderBills();
    return bills;
  } catch (err) {
    console.error(err);
  }
}

await getBills();

export { getBills };
