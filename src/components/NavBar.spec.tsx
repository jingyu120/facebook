import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Navigation bar", () => {
  describe("Layout", () => {
    beforeEach(() => {
      render(<NavBar />);
    });
    it("has fb logo", () => {
      const fbIcon = screen.getByRole("img", { name: "fb-logo" });
      expect(fbIcon).toHaveAttribute(
        "src",
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
      );
      expect(fbIcon).toHaveAttribute("alt", "fb logo");
    });

    it("has home icon", () => {
      const homeIcon = screen.getByRole("button", { name: "home-icon" });
      expect(homeIcon).toBeInTheDocument();
    });

    it("has watch icon", () => {
      const watchIcon = screen.getByRole("button", { name: "watch-icon" });
      expect(watchIcon).toBeInTheDocument();
    });

    it("has market icon", () => {
      const marketIcon = screen.getByRole("button", { name: "market-icon" });
      expect(marketIcon).toBeInTheDocument();
    });

    it("has group icon", () => {
      const groupIcon = screen.getByRole("button", { name: "group-icon" });
      expect(groupIcon).toBeInTheDocument();
    });

    it("has game icon", () => {
      const gameIcon = screen.getByRole("button", { name: "game-icon" });
      expect(gameIcon).toBeInTheDocument();
    });

    it("has profile button", () => {
      const profileButton = screen.getByRole("button", { name: /Justin/ });
      expect(profileButton).toBeInTheDocument();
    });

    it("has menu icon", () => {
      const menuIcon = screen.getByRole("button", { name: "menu-icon" });
      expect(menuIcon).toBeInTheDocument();
    });

    it("has messenger icon", () => {
      const messengerIcon = screen.getByRole("button", {
        name: "messenger-icon",
      });
      expect(messengerIcon).toBeInTheDocument();
    });
    it("has notification icon", () => {
      const notificationIcon = screen.getByRole("button", {
        name: "notification-icon",
      });
      expect(notificationIcon).toBeInTheDocument();
    });
    it("has account icon", () => {
      const accountIcon = screen.getByRole("button", { name: "account-icon" });
      expect(accountIcon).toBeInTheDocument();
    });

    it("has search field with a search icon", () => {
      const searchicon = screen.getByTitle("search");
      expect(searchicon).toBeInTheDocument();
      const searchField = screen.getByPlaceholderText("Search Facebook");
      expect(searchField).toBeInTheDocument();
    });
  });
});
