//react
import React, { Suspense } from "react";

//custom components
import UserTable from "./UserTable";

const Users = () => {
  return (
    <Suspense>
      <UserTable />
    </Suspense>
  );
};

export default Users;
