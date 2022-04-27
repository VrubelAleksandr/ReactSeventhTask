import api from "../../../api";

export function fetchUsers() {
  return api.get("users");
}

export function fetchUser(id) {
  return api.get("users/" + id);
}

export function fetchUserAlbums(id) {
  return api.get("albums?userId=" + id);
}

export function fetchUserPhotos(id) {
    return api.get("photos?albumId=" + id);
}
