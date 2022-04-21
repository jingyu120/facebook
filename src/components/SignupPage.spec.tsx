import SignupPage from "./SignupPage";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Sign up page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignupPage />);
      const header = screen.queryByRole("heading", { name: "Sign Up" });
      expect(header).toBeInTheDocument();
      const subheader = screen.queryByRole("heading", {
        name: "It's quick and easy.",
      });
      expect(subheader).toBeInTheDocument();
    });

    it("has first name input", () => {
      render(<SignupPage />);
      const input = screen.getByPlaceholderText("First name");
      expect(input).toBeInTheDocument();
    });

    it("has last name input", () => {
      render(<SignupPage />);
      const input = screen.getByPlaceholderText("Last name");
      expect(input).toBeInTheDocument();
    });

    it("has email input", () => {
      render(<SignupPage />);
      const email = screen.getByPlaceholderText("Email");
      expect(email).toBeInTheDocument();
    });

    it("has password input", () => {
      render(<SignupPage />);
      const password = screen.getByPlaceholderText(
        "New Password"
      ) as HTMLInputElement;
      expect(password).toBeInTheDocument();
      expect(password.type).toBe("password");
    });

    it("has footer", () => {
      render(<SignupPage />);
      const footer = screen.getByText(/By clicking Sign Up/);
      expect(footer).toBeInTheDocument();
    });

    it("has sign up button", () => {
      render(<SignupPage />);
      const signupButton = screen.queryByRole("button", { name: "Sign Up" });
      expect(signupButton).toBeInTheDocument();
    });

    it("has gender radio buttons and initially unchecked", () => {
      render(<SignupPage />);
      const maleRadio = screen.getByLabelText("Male");
      expect(maleRadio).toBeInTheDocument();
      expect(maleRadio).not.toBeChecked();
      const femaleRadio = screen.getByLabelText("Female");
      expect(femaleRadio).toBeInTheDocument();
      expect(femaleRadio).not.toBeChecked();
      const customRadio = screen.getByLabelText("Custom");
      expect(customRadio).toBeInTheDocument();
      expect(customRadio).not.toBeChecked();
    });
  });

  describe("Interactions", () => {
    it("checks radio button when clicked and other radio button becomes unchecked", () => {
      render(<SignupPage />);
      const maleRadio = screen.getByLabelText("Male");
      expect(maleRadio).not.toBeChecked();
      fireEvent.click(maleRadio);
      expect(maleRadio).toBeChecked();
      const femaleRadio = screen.getByLabelText("Female");
      expect(femaleRadio).not.toBeChecked();
      fireEvent.click(femaleRadio);
      expect(femaleRadio).toBeChecked();
      expect(maleRadio).not.toBeChecked();
      const customRadio = screen.getByLabelText("Custom");
      expect(customRadio).not.toBeChecked();
      fireEvent.click(customRadio);
      expect(customRadio).toBeChecked();
      expect(femaleRadio).not.toBeChecked();
      expect(maleRadio).not.toBeChecked();
    });
    //   it("enables signup button when all fields are filled out", () => {
    //     render(<SignupPage />);
    //     const username = screen.queryByPlaceholderText(
    //       "Username"
    //     ) as HTMLInputElement;
    //     const email = screen.queryByPlaceholderText("Email") as HTMLInputElement;
    //     const password = screen.queryByPlaceholderText(
    //       "Password"
    //     ) as HTMLInputElement;
    //     fireEvent.change(username, { target: { value: "jingyu120" } });
    //     fireEvent.change(email, { target: { value: "jingyu120@gmail.com" } });
    //     fireEvent.change(password, { target: { value: "jingyu120" } });
    //     const button = screen.queryByRole("button", { name: "Sign Up" });
    //     expect(button).toBeEnabled();
    //   });
  });
});
