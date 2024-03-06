import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("uses a prop of 'search' to display the search term in the input field", () => {
  render(<Filter search="testing" />);
  expect(screen.getByPlaceholderText('Search...')).toHaveValue('testing');
});

test("the input field acts as a controlled input", () => {
  const onSearchChange = jest.fn();
  render(<Filter search="" onSearchChange={onSearchChange} />);

  fireEvent.change(screen.getByPlaceholderText('Search...'), {
    target: { value: 'test' },
  });

  expect(onSearchChange).toHaveBeenCalledWith('test');
});
