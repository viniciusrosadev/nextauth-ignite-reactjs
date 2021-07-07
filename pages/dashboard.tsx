import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Dashboard() {
  const { user } = useContext(AuthContext);

  return <h2>Dashboard</h2>;
}
