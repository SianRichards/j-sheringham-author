import React from "react";
import styles from "./button.module.scss";

export interface IProps {
  title: string;
  children?: any;
}

const ButtonHook = (props: IProps) => {
  const { title, children } = props;
  return (
    <button className={styles.button}>
      {title}
      {children}
    </button>
  );
};

export default ButtonHook;
