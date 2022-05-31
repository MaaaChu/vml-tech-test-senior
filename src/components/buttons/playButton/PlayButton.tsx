import React from "react";
import classNames from "classnames";

import styles from "./PlayButton.module.css";

import { ButtonProps } from "../../../interfaces";

interface PlayButtonProps extends ButtonProps {
  btnOnClick?: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  children,
  type = "primary",
  isBtnDisabled,
  btnDisplayed = "displayed",
  btnOnClick,
}) => {
  return (
    <button
      type="button"
      disabled={isBtnDisabled}
      className={classNames(
        "btn",
        `btn--${type}`,
        `btn--${btnDisplayed}`,
        styles["btn--play"]
      )}
      onClick={btnOnClick}
    >
      {children}
    </button>
  );
};

export default PlayButton;
