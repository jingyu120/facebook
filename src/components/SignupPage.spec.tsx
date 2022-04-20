import SignupPage from "./SignupPage";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Sign up page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignupPage />);
      const header = screen.queryByRole("heading", { name: "Sign Up" });
      expect(header).toBeInTheDocument();
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

    it("has sign up button", () => {
      render(<SignupPage />);
      const signupButton = screen.queryByRole("button", { name: "Sign Up" });
      expect(signupButton).toBeInTheDocument();
    });

    it("has month selector", () => {
      render(<SignupPage />);
    });
  });

  describe("Interactions", () => {
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
