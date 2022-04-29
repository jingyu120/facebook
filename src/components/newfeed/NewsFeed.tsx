import React from "react";
import Story from "./Story";


type Props = {};

function NewsFeed({}: Props) {

  return (
    <div className="flex flex-col">
      <div>
        <Story />
      </div>
    </div>
  );
}

export default NewsFeed;
