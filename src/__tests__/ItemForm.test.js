import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  // Submit the form
  fireEvent.submit(screen.getByTestId("item-form"));

  // Check if the onItemFormSubmit callback is called
  expect(onItemFormSubmit).toHaveBeenCalled();
});

test("adds a new item to the list when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  // Simulate input changes
  fireEvent.change(screen.queryByLabelText(/Name/), {
    target: { value: "Ice Cream" },
  });
  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Dessert" },
  });

  // Submit the form
  fireEvent.submit(screen.getByTestId("item-form"));

  // Check if the item is added to the list
  const dessertCount = screen.queryAllByText(/Ice Cream/).length;
  expect(dessertCount).toBe(1);
});
