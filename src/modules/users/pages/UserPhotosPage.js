import React from "react";
import { useParams } from "react-router-dom";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import useUserPhotos from "../hooks/useUserPhotos";

export default function UserPhotosPage() {
  const { photosId } = useParams();
  const photos = useUserPhotos(photosId);
  return (
    <div>
      <div>
        <h2>PHOTOS</h2>
        <ButtonNavBack />
      </div>
      {photos.map((item) => {
        return <img key={item.id} src={item.thumbnailUrl} alt=""></img>;
      })}
    </div>
  );
}
