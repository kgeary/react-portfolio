import React from "react";

function ContactForm() {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (message.length < 3) {
      document.getElementById("alert").textContent = "Message is too short";
      return;
    }

    if (!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/i.test(email)) {
      document.getElementById("alert").textContent = "You must specify a valid return email";
      return;
    }

    window.emailjs.send(
      "sendgrid",
      "contact_template",
      {
        from_email: email,
        from_name: name,
        from_subject: subject,
        from_message: message
      }
    )
      .then(res => {
        document.getElementById("alert").textContent = "Message Sent!";
        document.getElementById("email").value = "";
        document.getElementById("name").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      })
      .catch(err => {
        document.getElementById("alert").textContent = "Problem Sending Message";
        console.log(err);
      })
  };

  return (
    <div className="contact-container">
      <form id="contact-form" name="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" className="form-control" id="name" name="name" placeholder="Your Name" length="32" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Your Email Address" length="32" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="subject" className="form-control" id="subject" name="subject" placeholder="Subject" length="32" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (1024 char max)</label>
          <textarea className="form-control" id="message" name="message" rows="6" placeholder="Include a message" length="1024"></textarea>
        </div>
        <button id="submit" type="submit" className="btn btn-info" onClick={handleFormSubmit}>Submit</button>
        <span id="alert" role="alert" className="alert" />
      </form>
    </div >
  );
}

export default ContactForm;