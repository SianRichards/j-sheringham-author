import React from "react";
import styles from "./button.module.scss";

export interface IProps {
  title: string;
  children?: any;
  onClickFunction?: () => void;
  className?: string;
}

const Button = (props: IProps) => {
  const { className, title, onClickFunction } = props;
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClickFunction}
    >
      {title}
    </button>
  );
};

export default Button;
