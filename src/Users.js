import React from "react";
import users from "./users.json";
import "./User.css";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      {users.map((eachuser, id) => (
        <Link to={`{/Users/${id}}`} key={id}>
          <p>{eachuser.name}</p>
          {eachuser.email}
        </Link>
      ))}
    </div>
  );
};

export default Users;
