"use client"; // Ensure this component is rendered client-side

import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID", // Correct Service ID from EmailJS
          "YOUR_TEMPLATE_ID", // Correct Template ID from EmailJS
          form.current,       // Your form reference
          "YOUR_USER_ID"      // Correct User ID from EmailJS
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result); // Log result
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("Error sending email:", error); // Log the entire error
            alert("An error occurred. Please try again.");
          }
        );
    }
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" required />
          <input type="text" name="lastname" placeholder="Last Name" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows={3} required></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
