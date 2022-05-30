import React from "react";
import classNames from "classnames";

import styles from "./Badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
  type: "primary";
}

const Badge: React.FC<BadgeProps> = ({ children, type = "primary" }) => {
  return (
    <div className={classNames(styles.badge, styles[`badge--${type}`])}>
      <span className={styles["badge__text"]}>{children}</span>
    </div>
  );
};

export default Badge;
