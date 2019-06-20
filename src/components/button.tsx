import * as React from 'react';
import styles from "./button.module.scss";

export interface IProps {
    title: string;
}
 
export interface IState {
    
}
 
class Button extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <button className={styles.button} >{this.props.title}</button> );
    }
}
 
export default Button;