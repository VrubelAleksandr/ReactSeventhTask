import { useEffect, useState } from "react";
import { fetchUser } from "../services/usersService";

export default function useUserDetails(id) {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    fetchUser(id).then(({ data }) => setUserDetails(data));
  }, []);
  return userDetails;
}
