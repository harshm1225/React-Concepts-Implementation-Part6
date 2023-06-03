import "./UserList.css";
const UserList = ({ users }) => {
  return (
    <>
      {users.map((user, index) => {
        return (
          <div className="container" key={index}>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </div>
        );
      })}
    </>
  );
};
export default UserList;
