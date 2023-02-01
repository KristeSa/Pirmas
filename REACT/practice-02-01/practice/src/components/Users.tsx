import { useEffect, useState } from "react";
//import axios from "axios";
import { UserCard } from "./UserCard";

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = () => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
