import React from "react";
import {
  HomeIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  PuzzleIcon,
  ViewGridIcon,
  ChatAltIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

type Props = {};

function NavBar({}: Props) {
  return (
    <div>
      <div>
        {/*left*/}
        <img
          aria-label="fb-logo"
          className="w-10"
          alt="fb logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
        />
      </div>
      <div>
        {/*middle*/}
        <button className="w-10" aria-label="home-icon">
          <HomeIcon />
        </button>
        <button className="w-10" aria-label="watch-icon">
          <DesktopComputerIcon />
        </button>
        <button className="w-10" aria-label="market-icon">
          <ShoppingBagIcon />
        </button>
        <button className="w-10" aria-label="group-icon">
          <UserGroupIcon />
        </button>
        <button className="w-10" aria-label="game-icon">
          <PuzzleIcon />
        </button>
      </div>
      <div>
        {/*right*/}
        <button>
          <img
            className="w-10 rounded-full"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/92690763_10158917196618274_8488492201817407488_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PDik7fYKiFEAX-cXsYp&_nc_ht=scontent-ort2-2.xx&oh=00_AT8nZ2l0v2cDtby3e3sq-oygsbk2Ocr1JREsW3E3YKEzLw&oe=62879F37"
            alt="profile-pic"
          />
          Justin
        </button>
        <button className="w-10" aria-label="menu-icon">
          <ViewGridIcon />
        </button>
        <button className="w-10" aria-label="messenger-icon">
          <ChatAltIcon />
        </button>
        <button className="w-10" aria-label="notification-icon">
          <BellIcon />
        </button>
        <button className="w-10" aria-label="account-icon">
          <UserCircleIcon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
