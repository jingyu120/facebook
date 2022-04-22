import React from "react";
import LeftPanel from "../leftpanel/LeftPanel";
import NewsFeed from "../newfeed/NewsFeed";
import NavBar from "./NavBar";

type Props = {};

function HomePage({}: Props) {
  return (
    <div>
      <NavBar />
      <div className="flex justify-between">
        <div>
          <LeftPanel />
        </div>
        <div>
          <NewsFeed />
        </div>
        <div>{/*right panel*/}</div>
      </div>
    </div>
  );
}

export default HomePage;
