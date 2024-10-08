import React, { FormEvent, useState } from "react";
import styles from "./contact.module.scss";
import JoSheringham from "../../static/images/josheringham.jpg";
import Button from "../../components/button";

const Contact = () => {
  const [status, setStatus] = useState("");

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <article className={styles.main}>
      <img
        src={JoSheringham}
        alt="The author Jo Sheringham at a book signing"
      />
      <form
        onSubmit={submitForm}
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
          {status === "SUCCESS" ? (
            <p>Thank you, your enquiry has been submitted.</p>
          ) : (
            <Button title="Submit" />
          )}
          {status === "ERROR" && (
            <p>
              There was an error in submitting your enquiry. If this issue
              persists, please contact Jo Sheringham directly here:{" "}
              <a href="mailto:jo@sheringhambooks.com">jo@sheringhambooks.com</a>
            </p>
          )}
        </div>
      </form>
    </article>
  );
};

export default Contact;
