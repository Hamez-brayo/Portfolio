import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import "./FormStyles.css";

const Form = () => {
  const form = useRef();

  // Function to handle form submission and send email
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send email using EmailJS
    emailjs.sendForm('service_mknpphv', 'template_9nyvokc', form.current, 'SLbcXbaeIXive9aE-')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Clear form fields after successful submission
        form.current.reset();
      }, (error) => {
        console.error('Email sending failed:', error.text);
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="from_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Subject</label>
        <input type="text" name="subject" required />
        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type Your Message Here" required />
        <button className="btn" type="submit">Send</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default Form;
