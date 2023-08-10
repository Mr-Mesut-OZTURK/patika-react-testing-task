import React from "react";
// import ReactDOM from "react-dom";

import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'


import App from "./App";
import Header from "./components/header/Header";

it("header text control", () => {
  render(<App />);

  const header = screen.getByText("Emoji Search")
  expect(header).toBeInTheDocument()

});

it("list control", () => {
  render(<App />);

  const emojiList = screen.getAllByText("Click to copy emoji")
  expect(emojiList.length).toEqual(20)

});

it("filter control", () => {
  render(<App />);

  const emojiList = screen.getAllByText("Click to copy emoji")
  expect(emojiList.length).toEqual(20)

  // Perform filtering
  const input = screen.getByPlaceholderText('search input');
  fireEvent.change(input, { target: { value: 'grin' } });

  const newEmojiList = screen.getAllByText("Click to copy emoji")
  console.log({ newEmojiList: newEmojiList.length })
  expect(emojiList.length).toBeGreaterThanOrEqual(20)


});
