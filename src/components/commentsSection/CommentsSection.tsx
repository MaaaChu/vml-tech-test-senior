import React from "react";
import CommentsList from "../commentsList/CommentsList";
import Heading from "../typography/Heading";
import Badge from "../badge/Badge";

import styles from "./CommentsSection.module.css";

const CommentsSection = () => {
  return (
    <div className={styles["comments-section"]}>
      <div className={styles["comments-section__heading"]}>
        <Heading size="heading-3" colour="primary">
          Comments
        </Heading>
        <Badge type="primary">9</Badge>
      </div>
      <CommentsList />
    </div>
  );
};

export default CommentsSection;
