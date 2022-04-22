import { UsersIcon } from "@heroicons/react/solid";
import { fireEvent, render, screen } from "@testing-library/react";
import ListItem from "../ListItem";

describe("List Item", () => {
  describe("Layout", () => {
    it("can render profile", () => {
      render(
        <ListItem
          image="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/92690763_10158917196618274_8488492201817407488_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PDik7fYKiFEAX-cXsYp&_nc_ht=scontent-ort2-2.xx&oh=00_AT8nZ2l0v2cDtby3e3sq-oygsbk2Ocr1JREsW3E3YKEzLw&oe=62879F37"
          alt="profile pic"
          text="Justin Zhang"
        />
      );
      const profileElement = screen.getByAltText("profile pic");
      expect(profileElement).toBeInTheDocument();
      const textDescription = screen.getByText("Justin Zhang");
      expect(textDescription).toBeInTheDocument();
    });

    it("can render misc sections", () => {
      render(<ListItem icon={<UsersIcon />} text="Friends" />);
      const textDescription = screen.getByText("Friends");
      expect(textDescription).toBeInTheDocument();
    });
  });
});
