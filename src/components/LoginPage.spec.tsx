import { fireEvent, render, screen } from "@testing-library/react";
import { serialize } from "v8";
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
});
