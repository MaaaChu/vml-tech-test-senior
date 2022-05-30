import classNames from "classnames";
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  size?: "heading-1" | "heading-2" | "heading-3";
  colour?: "primary" | "secondary";
}

const Heading: React.FC<HeadingProps> = ({
  children,
  size = "heading-1",
  colour = "primary",
}) => {
  return <h1 className={classNames(size, `text--${colour}`)}>{children}</h1>;
};

export default Heading;
