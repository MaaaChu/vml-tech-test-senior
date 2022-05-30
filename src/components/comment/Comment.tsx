import React from "react";
import Text from "../typography/Text";

interface CommentProps {
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return <Text>{comment}</Text>;
};

export default Comment;
