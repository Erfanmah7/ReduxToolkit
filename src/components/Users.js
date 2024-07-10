import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h3>Users</h3>
      {users.loading?<h1>loading...</h1>:null}
      {users.users.length?users.users.map(user=><p key={user.id}>{user.name}</p>):null}
    </div>
  );
}

export default Users;
