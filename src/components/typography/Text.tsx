import classNames from "classnames";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  size?: "text-body" | "text-sm";
  colour?: "primary" | "secondary";
}

const Text: React.FC<TextProps> = ({
  children,
  size = "text-body",
  colour = "primary",
}) => {
  return <p className={classNames(size, `text--${colour}`)}>{children}</p>;
};

export default Text;
