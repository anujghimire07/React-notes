import React from "react";
import { useParams } from "react-router-dom";
const Users = () => {
  let params = useParams();
  return <div>my name is {params.username}</div>;
};

export default Users;
