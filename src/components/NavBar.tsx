import React from "react";

type Props = {};

function NavBar({}: Props) {
  return (
    <div>
      <div>
        {/*left*/}
        <img
          className="w-10"
          alt="fb logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
        />
      </div>
      <div>{/*middle*/}</div>
      <div>{/*right*/}</div>
    </div>
  );
}

export default NavBar;
