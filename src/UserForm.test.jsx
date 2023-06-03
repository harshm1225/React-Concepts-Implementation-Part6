import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

test("Verify presence of two input tags and a button", () => {
  render(<UserForm />);
  const allInputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(allInputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("Verify whether the onUserAdd function is called with proper name and email", () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);
  const nameInputEl = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInputEL = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  userEvent.click(nameInputEl);
  userEvent.keyboard("Harshal Sunil Mahajan");
  userEvent.click(emailInputEL);
  userEvent.keyboard("harshalmahajan173@gmail.com");
  fireEvent.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "Harshal Sunil Mahajan",
    email: "harshalmahajan173@gmail.com",
  });
});

test("Verify if the two inputs become empty upon form submission", () => {
  render(<UserForm onUserAdd={() => {}} />);
  const nameInputEl = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInputEL = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  userEvent.click(nameInputEl);
  userEvent.keyboard("Harshal Sunil Mahajan");
  userEvent.click(emailInputEL);
  userEvent.keyboard("harshalmahajan173@gmail.com");
  fireEvent.click(button);

  expect(nameInputEl).toHaveValue("");
  expect(emailInputEL).toHaveValue("");
});
