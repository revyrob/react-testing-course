// App.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App"; // Import your component

test("the button click flow", () => {
  //render app
  render(<App />);
  //find the button
  const buttonElement = screen.getByRole("button");
  //expect on start
  expect(buttonElement).toHaveClass("red");
  //expect on start
  expect(buttonElement).toHaveTextContent(/red/i);
  //click the button
  fireEvent.click(buttonElement);
  //check button text
  expect(buttonElement).toHaveClass("blue");
  //check the button color
  expect(buttonElement).toHaveTextContent(/blue/i);
});

test("to make sure the button starts off enabled", () => {
  //render the app
  render(<App />);
  //find the button
  const buttonElement = screen.getByRole("button");
  //if the checkbox is fired, then the button will be disabled
  const checkElement = screen.getByRole("checkbox", { id: /buttonDisable/i });
  //check if it is enabled
  expect(buttonElement).toBeEnabled();
  expect(checkElement).not.toBeChecked();
  //fire the checkbox event
  fireEvent.click(checkElement);
  //now the button should be diabled
  expect(buttonElement).toBeDisabled();
  expect(checkElement).toBeChecked();
});
