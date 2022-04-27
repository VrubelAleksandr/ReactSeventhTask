import { Routes, Route } from "react-router-dom";
import UserAlbumsPage from "./pages/UserAlbumsPage";
import UserListPage from "./pages/UserListPage";
import UserPhotosPage from "./pages/UserPhotosPage";

export default function UsersModule() {
  return (
    <Routes>
      <Route path="" element={<UserListPage />}></Route>
      <Route path=":id" element={<UserAlbumsPage />}></Route>
      <Route path=":id/:photosId" element={<UserPhotosPage />}></Route>
    </Routes>
  );
}
