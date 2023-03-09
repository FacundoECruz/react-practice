import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const setup = () => render(<Form />);

test("renders username form", () => {
  setup()
  const inputEl = screen.getByRole('textbox')
  const btnEl = screen.getByRole('button', {name: /submit/i})
  expect(inputEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
});

test("renders greeting to inserted name", async () => {
  setup()
  const username = 'Facu'
  const btnEl = screen.getByRole('button', {name: /submit/i})
  const inputEl = screen.getByRole('textbox')
  fireEvent.change(inputEl, {target: {value: username}})
  fireEvent.click(btnEl)
  const greet = await screen.findByText(`Hola ${username}`)
  expect(greet).toBeInTheDocument()
});
