import { useEffect, useState } from "react";
import { fetchUsers } from "../services/usersService";

export default function useUserList() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    fetchUsers().then(({ data }) => setlist(data));
  }, []);
  return list;
}
