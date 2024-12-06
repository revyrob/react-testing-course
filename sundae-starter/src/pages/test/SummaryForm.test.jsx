//this test just needs to test the following
//checkbox is unchecked by default
//checking checkbox enables button
//unchecking checkbox again disables button

import { render, screen } from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";
import userEvent from "@testing-library/user-event";

test("checkbox flow", async () => {
  //need this to bring in userEvent
  const user = userEvent.setup();
  //render the page
  render(<SummaryForm />);
  //find the checkbox on the page
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  //find the button on the page
  const buttonElement = screen.getByRole("button", { name: /confirm/i });
  //confirm that button is disabled, since that is the default mode
  expect(buttonElement).toBeDisabled();
  //confirm checkbox is not checked since that is the default mode
  expect(checkboxElement).not.toBeChecked();
  //trigger a checked box
  await user.click(checkboxElement);
  //now check that the checkbox is checked
  expect(checkboxElement).toBeChecked();
  //check if the buttons is enabled
  expect(buttonElement).toBeEnabled();
  //trigger a checked box unclicking
  await user.click(checkboxElement);
  //check if the buttons is enabled
  expect(buttonElement).toBeDisabled();
});

test("popover viewable and nonviewable with hover", async () => {
  const user = userEvent.setup();
  //render the comp
  render(<SummaryForm />);
  //check popover starts out hidden
  const nullPopover = screen.queryByText(
    /no icecream will actually be delivered/i
  );
  expect(nullPopover).toBeNull();
  //popover appear on moverover of checkbox label
  const hoverText = screen.getByText(/terms and conditions/i);
  await user.hover(hoverText);
  expect(nullPopover).toBeVisible();
  //popover disappears when we mouse out
  await user.unhover(hoverText);
  expect(nullPopover).toBeNull();
});
