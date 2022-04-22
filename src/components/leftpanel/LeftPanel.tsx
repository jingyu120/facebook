import {
  BookmarkIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import ListItem from "./ListItem";

type Props = {};

function LeftPanel({}: Props) {
  return (
    <div className="w-[360px]">
      <div>
        <ListItem
          image="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/92690763_10158917196618274_8488492201817407488_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PDik7fYKiFEAX-cXsYp&_nc_ht=scontent-ort2-2.xx&oh=00_AT8nZ2l0v2cDtby3e3sq-oygsbk2Ocr1JREsW3E3YKEzLw&oe=62879F37"
          alt="profile pic"
          text="Justin Zhang"
        />
        <ListItem icon={<UsersIcon />} text="Friends" />
        <ListItem icon={<UserGroupIcon />} text="Groups" />
        <ListItem icon={<ShoppingBagIcon />} text="Marketplace" />
        <ListItem icon={<DesktopComputerIcon />} text="Watch" />
        <ListItem icon={<BookmarkIcon />} text="Saved" />
      </div>
      <hr />
    </div>
  );
}

export default LeftPanel;
