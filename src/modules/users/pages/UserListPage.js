import React from "react";
import useUserList from "../hooks/useUserList";
import UserList from "../components/UserList";
import ButtonNavBack from "../../common/components/ButtonNavBack";

export default function UserListPage() {
  const list = useUserList();
  console.log(list);
  return (
    <div>
      <h2>UserListPage</h2>
      <UserList list={list} />
      <ButtonNavBack />
    </div>
  );
}
