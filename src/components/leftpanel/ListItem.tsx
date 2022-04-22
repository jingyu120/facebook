import React, { ReactElement } from "react";

type Props = {
  image?: string;
  text: string;
  alt?: string;
  icon?: ReactElement;
};

function ListItem({ image, text, alt, icon }: Props) {
  return (
    <div className="flex m-3 items-center">
      <div className="w-10 mr-3">
        {image && <img className="rounded-full" src={image} alt={alt} />}
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}

export default ListItem;
