import axios from "axios";
import { useEffect, useState } from "react";

export const Table = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOrders = () => {
    axios
      .get("https://believed-shore-vanadium.glitch.me")
      .then((response) => setOrders(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  const deleteOrder = (id: any) => {
    const shouldDeleteOrder = window.confirm("Delete this order?");

    if (shouldDeleteOrder) {
      return;
    }

    axios
      .delete(`https://believed-shore-vanadium.glitch.me/${id}`)
      .then(() => fetchOrders())
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>People</th>
              <th>Order price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                onClick={() => {
                  deleteOrder(order.id);
                }}
                key={order.id}
              >
                <td>ID: {order.id}</td>
                <td>{order.people}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
