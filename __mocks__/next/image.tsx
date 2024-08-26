import React from "react";

const Image: React.FC<{
  src: string;
  height: number;
  width: number;
  alt: string;
  className?: string;
}> = (props) => {
  return <img {...props} />;
};

export default Image;
