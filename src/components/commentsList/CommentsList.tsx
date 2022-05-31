import React from "react";
import Comment from "../comment/Comment";

import { VideoComment } from "../../types";

interface CommentsListProps {
  videoComments?: VideoComment[];
}

const CommentsList: React.FC<CommentsListProps> = ({ videoComments }) => {
  if (!videoComments || videoComments.length === 0) return null;

  return (
    <div>
      {videoComments.map((videoComment) => (
        <Comment
          key={videoComment.id}
          text={videoComment.text}
          user={videoComment.user}
          upvotes={videoComment.upvotes}
          date={videoComment.date}
        />
      ))}
    </div>
  );
};

export default CommentsList;
