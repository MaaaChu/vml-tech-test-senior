import React from "react";
import classNames from "classnames";

import { VideoComment } from "../../../types";
import { ButtonProps } from "../../../interfaces";

interface SortButtonProps extends ButtonProps {
  sortVideoComments: (
    videoCommments: VideoComment[],
    isAscending: boolean
  ) => void;
  videoComments: VideoComment[];
  isAscending: boolean;
}

const SortButton: React.FC<SortButtonProps> = ({
  children,
  id,
  type = "primary",
  isBtnDisabled = false,
  activeBtnId,
  btnDisplayed = "displayed",
  sortVideoComments,
  videoComments,
  isAscending,
}) => {
  const btnActiveStyle = id === activeBtnId ? `btn--${type}--active` : "";

  return (
    <button
      type="button"
      disabled={isBtnDisabled}
      className={classNames(
        "btn",
        `btn--${type}`,
        `btn--${btnDisplayed}`,
        btnActiveStyle
      )}
      onClick={() => sortVideoComments(videoComments, isAscending)}
    >
      {children}
    </button>
  );
};

export default SortButton;
