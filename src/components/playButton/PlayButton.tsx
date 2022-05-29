import React from "react";
import classNames from "classnames";

import styles from "./PlayButton.module.css";

import { PlayBtnDisplayed } from "../../types/Types";

interface PlayButtonProps {
  isPlaying: boolean;
  isBtnDisabled: boolean;
  btnDisplayed: PlayBtnDisplayed;
  btnOnClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  isBtnDisabled,
  btnDisplayed,
  btnOnClick,
}) => {
  return (
    <button
      type="button"
      disabled={isBtnDisabled}
      className={classNames(
        styles["play-btn"],
        styles["play-btn--primary"],
        styles[`play-btn--${btnDisplayed}`]
      )}
      onClick={btnOnClick}
    >
      {isPlaying ? "Pause" : "Play"}
    </button>
  );
};

export default PlayButton;
