import { renderBills } from "./renderBills.js";

async function getBills() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const group_id = +urlParams.get("group-id");

  console.log({ group_id, urlParams });

  try {
    const response = await fetch(`http://localhost:5100/bills/${group_id}`);
    const bills = await response.json();

    return bills;
  } catch (err) {
    console.error(err);
  }
}

renderBills();

await getBills();

export { getBills };
