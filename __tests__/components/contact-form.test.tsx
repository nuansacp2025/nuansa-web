import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "@/app/components/contact-form";

describe("ContactForm", () => {
  it("renders the form correctly", () => {
    render(<ContactForm />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("allows users to type into input fields", () => {
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText("First Name");
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput).toHaveValue("John");
  });

  it("submits the form when the submit button is clicked", () => {
    render(<ContactForm />);
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
  });
});
