import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function UserList({ list }) {
  const { pathname } = useLocation();
  return (
    <div>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <Link className="text-decor" to={`${pathname}/${item.id}`}>
              <div className="target text">{item.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
