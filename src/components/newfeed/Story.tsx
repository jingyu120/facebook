import React from "react";
import mockData from "../../MOCK_DATA.json";
import StoryCard from "./StoryCard";

type Props = {};

function Story({}: Props) {
  const [data, setData] = React.useState<
    {
      id: number;
      first_name: string;
      last_name: string;
      image: string;
      profile: string;
    }[]
  >();
  React.useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <div>
      {data?.map((entry) => (
        <StoryCard data={entry} />
      ))}
    </div>
  );
}

export default Story;
