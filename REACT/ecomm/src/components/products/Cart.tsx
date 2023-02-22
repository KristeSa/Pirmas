import { useContext } from "react"

export const ShoppingCart = () => {
    const { cart, removeItem } = useContext(CartContext);

    return (
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}
                />
                {todo.title}
              </label>
            </div>
          ))}
        </>
      );
    }
}