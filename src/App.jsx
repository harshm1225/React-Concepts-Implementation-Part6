import UserForm from "./UserForm";
import UserList from "./UserList";
import { useState } from "react";
const App = () => {
  const [users, setUsers] = useState([]);
  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };
  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </>
  );
};

export default App;
