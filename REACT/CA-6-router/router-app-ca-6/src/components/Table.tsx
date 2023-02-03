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

  useEffect(() => {
    fetchOrders();
  }, []);

  const deleteOrder = (id: number) => {
    axios
      .delete(`https://believed-shore-vanadium.glitch.me/${id}`)
      .then(() => fetchOrders())
      .catch((error) => console.error(error));
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="container">
          {orders.map((order) => (order: any, i: number) => (
            <div key={`${order.id} - ${i}`} className="order-container">
              <p>{order.people}</p>
              <p>{order.price}</p>
              <button
                onClick={() => {
                  deleteOrder(order.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
