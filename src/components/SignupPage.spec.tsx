import SignupPage from "./SignupPage";
import { render, screen } from "@testing-library/react";

describe("Sign up page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignupPage />);
      const header = screen.queryByRole("heading", { name: "Sign Up" });
      expect(header).toBeInTheDocument();
    });

    it("has username input", () => {
      render(<SignupPage />);
      const input = screen.getByPlaceholderText("Username");
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
        "Password"
      ) as HTMLInputElement;
      expect(password).toBeInTheDocument();
      expect(password.type).toBe("password");
    });

    it("has sign up button", () => {
      render(<SignupPage />);
      const signupButton = screen.queryByRole("button", { name: "Sign Up" });
      expect(signupButton).toBeInTheDocument();
    });
  });
});
