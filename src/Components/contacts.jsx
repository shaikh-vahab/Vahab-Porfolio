import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../css/contacts.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xnt1mhl', // Your service ID
        'template_dh5scaw', // Your template ID
        form.current,       // The form reference
        'wLjjZ-RUosAAG0_a7' // Your user ID
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          // alert('Message sent successfully!');
          toast.success('data Send Successfully');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('FAILED...', error);
          // alert('Error occurred while sending the message: ' + error.text);
          toast.error('error When data send Time');

        }
      );
  };

  return (
    <section id="contact" className="contact">
      <ToastContainer/>
      <h2 className="contact-title">Get in Touch</h2>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="massage"
          placeholder="Your Message"
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
