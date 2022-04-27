import { useEffect, useState } from "react";
import { fetchUserPhotos } from "../services/usersService";

export default function useUserPhotos(id) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchUserPhotos(id).then(({ data }) => setPhotos(data));
  }, []);
  return photos;
}