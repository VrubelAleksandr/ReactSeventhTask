import { useEffect, useState } from "react";
import { fetchUserAlbums } from "../services/usersService";

export default function useUserAlbums(id) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetchUserAlbums(id).then(({ data }) => setAlbums(data));
  }, []);
  return albums;
}
