import { XIcon } from "@heroicons/react/solid";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Login Page", () => {
  describe("Layout", () => {
    it("has email input", () => {
      render(<LoginPage />);
      const emailElement = screen.getByPlaceholderText("Email");
      expect(emailElement).toBeInTheDocument();
    });

    it("has password field", () => {
      render(<LoginPage />);
      const passwordField = screen.getByPlaceholderText("Password");
      expect(passwordField).toBeInTheDocument();
    });

    it("has login button", () => {
      render(<LoginPage />);
      const loginButton = screen.getByRole("button", { name: "Log In" });
      expect(loginButton).toBeInTheDocument();
    });

    it("has forgot password link", () => {
      render(<LoginPage />);
      const forgotPasswordLink = screen.getByRole("link", {
        name: "Forgot password?",
      });
      expect(forgotPasswordLink).toBeInTheDocument();
    });

    it("has create new account button", () => {
      render(<LoginPage />);
      const reigsterButton = screen.getByRole("button", {
        name: "Create new account",
      });
      expect(reigsterButton).toBeInTheDocument();
    });

    it("has header and subheader", () => {
      render(<LoginPage />);
      const mainHeader = screen.getByRole("heading", { name: "facebook" });
      expect(mainHeader).toBeInTheDocument();
      const subHeader = screen.getByRole("heading", {
        name: /connect with friends/i,
      });
      expect(subHeader).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    it("opens registration modal when create new account is clicked", () => {
      render(<LoginPage />);
      const registerButton = screen.getByRole("button", {
        name: "Create new account",
      });
      fireEvent.click(registerButton);
      const signupButton = screen.getByRole("button", { name: "Sign Up" });
      expect(signupButton).toBeInTheDocument();
    });

    it("closes registration modal when X button is clicked", () => {
      render(<LoginPage />);
      const registerButton = screen.getByRole("button", {
        name: "Create new account",
      });
      fireEvent.click(registerButton);
      const signupButton = screen.getByRole("button", { name: "Sign Up" });
      expect(signupButton).toBeInTheDocument();
      const closeButton = screen.getByRole("button", { name: /close/i });
      fireEvent.click(closeButton);
      expect(signupButton).not.toBeInTheDocument();
    });
  });
});
