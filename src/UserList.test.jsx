import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("Verify that two <span> elements are rendered upon each click of the submit button", () => {
  const users = [
    {
      name: "Harshal Sunil Mahajan",
      email: "harshalmahajan173@gmail.com",
    },
  ];

  const { container } = render(<UserList users={users} />);
  const renderedSpans = container.querySelectorAll("span");

  expect(renderedSpans).toHaveLength(2);
  screen.debug();
});
