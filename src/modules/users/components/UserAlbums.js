import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function UserAlbums({ albums, userDetails }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      {albums.map((item) => {
        return (
          <div key={item.id}>
            <Link className="text-decor" to={`${pathname}/${item.id}`}>
              <div className="target text">{item.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
