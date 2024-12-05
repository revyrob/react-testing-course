import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App"; // Import your component
import { kebabCaseToTitleCase } from "./helper";

test("checkbox flow", () => {
  //render app
  render(<App />);
  //check the button
  const buttonElement = screen.getByRole("button");
  //check the checkbox
  const checkboxElement = screen.getByRole("checkbox");
  //button starts enabled
  expect(buttonElement).toBeEnabled();
  //check checkbox is not checked
  expect(checkboxElement).not.toBeChecked();
  //check the name
  expect(buttonElement).toHaveTextContent("Medium Violet Red");
  //fire event of click
  fireEvent.click(checkboxElement);
  //check that checkbox is true
  expect(checkboxElement).toBeChecked();
  //check that the button is disabled
  expect(buttonElement).toBeDisabled();
  //then class changes to a grey color
  expect(buttonElement).toHaveClass(/grey/i);
  //check the name
  expect(buttonElement).toHaveTextContent("Grey");
  //fire event of click
  fireEvent.click(checkboxElement);
  //check the checkbox is false
  expect(checkboxElement).not.toBeChecked();
  //check that the button is enabled
  expect(buttonElement).toBeEnabled();
  //then class changes to a grey color
  expect(buttonElement).toHaveClass(/red/i);
  //check the name
  expect(buttonElement).toHaveTextContent("Medium Violet Red");
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphens", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
