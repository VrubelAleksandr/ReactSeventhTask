import React from "react";
import { useParams } from "react-router-dom";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import UserAlbums from "../components/UserAlbums";
import useUserDetails from "../hooks/useUser";
import useUserAlbums from "../hooks/useUserAlbums";

export default function UserAlbumsPage() {
  const { id } = useParams();
  const albums = useUserAlbums(id);
  const userDetails = useUserDetails(id);
  return (
  <div>
    <h2>Albums {userDetails.name}</h2>
     <UserAlbums albums={albums} userDetails={userDetails} />
     <ButtonNavBack />
  </div>
 )
}
