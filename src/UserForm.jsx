import "./UserForm.css";
import { useState } from "react";
const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUserAdd({ name, email });
    setName("");
    setEmail("");
  };
  return (
    <>
      <form autoComplete="off">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </>
  );
};
export default UserForm;
