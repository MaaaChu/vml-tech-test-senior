import React from "react";
import Heading from "../typography/Heading";
import Text from "../typography/Text";

import styles from "./Comment.module.css";

interface CommentProps {
  text: string;
  user: string;
  upvotes: number;
  date: number;
}

const Comment: React.FC<CommentProps> = ({ text, user, upvotes, date }) => {
  const commentTime = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "short",
    dateStyle: "medium",
  }).format(date);

  return (
    <div className={styles.comment}>
      <div className={styles["comment__header"]}>
        <Heading size="heading-3">{user}</Heading>
        <Text colour="secondary">{commentTime}</Text>
      </div>
      <div className={styles["comment__body"]}>
        <Text>{text}</Text>
      </div>
      <div className={styles["comment__upvotes"]}>
        <svg
          className={styles["comment__upvotes__icon"]}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
        <Text colour="secondary">{upvotes}</Text>
      </div>
    </div>
  );
};

export default Comment;
