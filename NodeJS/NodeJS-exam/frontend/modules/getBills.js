import { renderBills } from "./renderBills.js";

async function getBills() {
  const params = new URL(document.location).searchParams;
  const group_id = parseInt(params.get("group_id"));
  console.log(group_id);

  try {
    const response = await fetch(
      `http://localhost:5100/bills/groupId/${group_id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const bills = await response.json();

    return bills;
  } catch (error) {
    console.error({ error });
  }
}

renderBills();

await getBills();

export { getBills };
