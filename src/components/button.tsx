import * as React from 'react';
import styles from "./button.module.scss";

export interface IProps {
    title: string;
}
class Button extends React.Component<IProps> {
    render() {
        return (
            <button className={styles.button}>
                {this.props.title}
                {this.props.children}
            </button>);
    }
}

export default Button;