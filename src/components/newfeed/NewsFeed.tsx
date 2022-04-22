import React from "react";
import Story from "./Story";
import mockData from "../../MOCK_DATA.json";

type Props = {};

function NewsFeed({}: Props) {
  const [data, setData] =
    React.useState<
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
  console.log(data);

  return (
    <div className="flex flex-col">
      <div>
        <Story />
      </div>
    </div>
  );
}

export default NewsFeed;
