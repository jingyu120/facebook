import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Navigation bar", () => {
  describe("Layout", () => {
    it("has fb logo", () => {
      render(<NavBar />);
      const fbIcon = screen.getByRole("img");
      expect(fbIcon).toHaveAttribute(
        "src",
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
      );
      expect(fbIcon).toHaveAttribute("alt", "fb logo");
    });

    it("has home icon", () => {});
  });
});
