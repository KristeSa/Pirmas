import { useNavigate } from "react-router-dom";

export const ButtonLink = ({ link, message }: any) => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(link)}>{message}</button>;
};
