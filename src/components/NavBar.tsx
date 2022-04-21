import React from "react";
import {
  HomeIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  PuzzleIcon,
} from "@heroicons/react/solid";

type Props = {};

function NavBar({}: Props) {
  return (
    <div>
      <div>
        {/*left*/}
        <img
          aria-aria-label=""
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
      <div>{/*right*/}</div>
    </div>
  );
}

export default NavBar;
