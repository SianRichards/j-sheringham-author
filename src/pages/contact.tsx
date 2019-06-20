import * as React from 'react';
import styles from "./contact.module.scss";
import Header from "../components/header";
import Footer from "../components/footer"
import JoSheringham from "../static/images/josheringham.jpg";

export interface IProps {
    
}
 
export interface IState {
    userName: string;
    contactNo: string;
    email: string;
    message: string;
    submitted: boolean;
}
 
class Contact extends React.Component<IProps, IState> {
    state = { userName: "", contactNo: "", email: "", message: "", submitted: false }

// handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
//     let name = event.target.name;
//     let value = event.target.value;
//     this.setState({...this.state, [name]: value});
//     console.log(this.state)
// }

// handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (this.state.userName.length !== 0 && this.state.contactNo.length !== 0 && this.state.email.length !== 0 && this.state.message.length 
//         !== 0) {
//         alert("Thank you. Your message has been sent."); this.setState({...this.state, submitted: true});;
//     }
//     else {alert("Please ensure all input fields are filled before submitting your message.")};
// const formData = this.state;
// fetch ('/', {
//     method: 'GET',
//     body: JSON.stringify(formData)
//    })
//    .then(response => {
//     response.json().then(formData =>{
//       console.log("Successful" + formData)});
//     }
//     }


    render() { 
        return ( <React.Fragment> <Header /><article className={styles.main}><div>
        <h1>For all enquiries, please contact Jo Sheringham via jo@sheringhambooks.com</h1>
        <h2>Alternatively, you can find me on Facebook</h2>
        </div>
        <div>
        <img src={JoSheringham} />
        </div>
        {/* <form onSubmit={this.handleSubmit}><h1>Contact</h1> <label>Your name: <input type="text" name="userName" onChange={this.handleChange}/></label>
        <label>Contact number: <input type="text" name="contactNo" onChange={this.handleChange}/></label>
        <label>Email address: <input type="email" name="email" onChange={this.handleChange} /></label>
        <label>Message: <input type="text" name="message" className={styles.message} onChange={this.handleChange} /></label>
        <input type="submit" value="submit" name="submitted" className={styles.submit}/></form> */}
        </article><Footer />
            </React.Fragment>);
    }
}
 
export default Contact;