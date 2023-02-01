import { useRef, useState } from "react";
import { setConstantValue } from "typescript";

export const UserCard = ({ user }: any) => {
  const [isUserIdVisible, setIsUserIdVisible] = useState(false);

  return (
    <div className="user-container">
      <h3>{user.login}</h3>
      <img src={user.avatar_url} />
      <p>{user.type}</p>
      <div>
        {isUserIdVisible && <p>{user.id}</p>}
        <button onClick={() => setIsUserIdVisible(!isUserIdVisible)}>
          Show user ID
        </button>
      </div>
    </div>
  );
};
