import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  isBtnDisabled: boolean;
  btnOnClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isBtnDisabled,
  btnOnClick,
}) => {
  return (
    <button
      disabled={isBtnDisabled}
      className={styles.primary}
      onClick={btnOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
