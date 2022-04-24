import React from "react";

type Props = {
  data: {
    id: number;
    first_name: string;
    last_name: string;
    image: string;
    profile: string;
  };
};

function StoryCard({ data }: Props) {
  return (
    <div>
      <img src="image" alt="story preview" />
    </div>
  );
}

export default StoryCard;
