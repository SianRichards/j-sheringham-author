import React from "react";
import styles from "./button.module.scss";

export interface IProps {
  title: string;
  children?: any;
}

const Button = (props: IProps) => {
  const { title } = props;
  return (
    <button className={styles.button}>
      {title}
    </button>
  );
};

export default Button;
