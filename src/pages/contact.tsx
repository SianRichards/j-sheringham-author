import * as React from 'react';
import styles from "./contact.module.scss";
import JoSheringham from "../static/images/josheringham.jpg";
import Button from '../components/button';
export interface IState {
    status: string;
}

class Contact extends React.Component<IState> {
    state = { status: '' }

    submitForm = (event: any) => {
        console.log(event)
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        return (<React.Fragment>
            <article className={styles.main}>
                <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/xqkdjopz"
                    method="POST"
                    className={styles.form}
                >
                    For enquiries, please use the contact form below.
                    <div className={styles.formSection}>
                        <label>Your Email:</label>
                        <input type="email" name="email" className={styles.formEmail} />
                    </div>
                    <div className={styles.formSection}>
                        <label>Message:</label>
                        <textarea name="message" className={styles.formMessage}></textarea>
                    </div>
                    <div>
                        {this.state.status === "SUCCESS" ? <p>Thank you, your enquiry has been submitted.</p> :
                            <Button title="Submit" />}
                        {this.state.status === "ERROR" && <p>There was an error in submitting your enquiry. If this issue persists,
                        please contact Jo Sheringham directly here: <a href="mailto:jo@sheringhambooks.com">jo@sheringhambooks.com</a>
                        </p>}
                    </div>
                </form>
                <img src={JoSheringham} alt="The author Jo Sheringham at a book signing" />
            </article>
        </React.Fragment>);
    }
}

export default Contact;