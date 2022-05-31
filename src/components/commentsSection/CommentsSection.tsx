import React, { useState, useEffect } from "react";
import axios from "axios";

import CommentsList from "../commentsList/CommentsList";
import Heading from "../typography/Heading";
import Badge from "../badge/Badge";

import styles from "./CommentsSection.module.css";

import { VideoComment } from "../../types";
import { COMMENTS_URL } from "../../constants";
import SortButton from "../buttons/sortButton/SortButton";

interface CommentsSectionProps {
  videoId: number;
  isVideoReady: boolean;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  videoId,
  isVideoReady = false,
}) => {
  const [videoComments, setVideoComments] = useState<VideoComment[]>([]);
  const [activeBtnId, setActiveBtnId] = useState<string>("new-first");

  const fetchComments = async () => {
    axios.get(COMMENTS_URL).then((response) => {
      if (response.status !== 200) {
        console.log("Oh noo");
        return;
      }
      if (videoId !== response.data[0]["video_id"]) {
        console.log("Comments ID does not match video ID");
        return;
      }

      sortVideoComments(response.data, true);
    });
  };

  useEffect(() => {
    if (!isVideoReady) setVideoComments([]);
    else fetchComments();
  }, [isVideoReady, videoId]);

  const sortVideoComments = (
    videoComments: VideoComment[],
    isAscending: boolean
  ) => {
    const sortedVideoComments = videoComments?.sort((x, y) => {
      if (isAscending) return x.date - y.date;
      else return y.date - x.date;
    });

    if (isAscending) setActiveBtnId("new-first");
    else setActiveBtnId("old-first");

    setVideoComments([...sortedVideoComments]);
  };

  return (
    <div className={styles["comments-section"]}>
      <div className={styles["comments-section__header__wrapper"]}>
        <div className={styles["comments-section__header"]}>
          <Heading size="heading-3" colour="primary">
            Comments
          </Heading>
          {videoComments && (
            <Badge type="primary">{videoComments.length}</Badge>
          )}
        </div>
        <div className={styles["comments-section__sort-btns"]}>
          <SortButton
            id="new-first"
            type="secondary"
            activeBtnId={activeBtnId}
            isBtnDisabled={false}
            videoComments={videoComments}
            isAscending={true}
            sortVideoComments={sortVideoComments}
          >
            Newest first
          </SortButton>
          <SortButton
            id="old-first"
            type="secondary"
            isBtnDisabled={false}
            activeBtnId={activeBtnId}
            videoComments={videoComments}
            isAscending={false}
            sortVideoComments={sortVideoComments}
          >
            Oldest first
          </SortButton>
        </div>
      </div>

      <CommentsList videoComments={videoComments} />
    </div>
  );
};

export default CommentsSection;
