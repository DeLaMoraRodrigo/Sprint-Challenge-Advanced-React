import React from "react";
import NavBar from "./NavBar";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

test("Does NavBar render", () => {
    render(<NavBar />)
})

test("Does Change Theme button toggle dark-mode class", () => {
    const { getByText } = render(<NavBar />);

    const button = getByText(/Change Theme/i);

    act(() => {
        fireEvent.click(button);
    });

    expect(document.body.classList.contains("dark-mode")).toBe(true);
})