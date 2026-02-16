import { useState } from "react";
import { contacts } from "../../data/contactdata";
import { trackEvent } from "../../utils/analytics";
import "./Contact.css";

function SingleContactDiv({ title, url, Logo }) {
  function handleClick() {
    window.open(url, "_blank", "noopener,noreferrer");
    trackEvent(`contact_${title.toLowerCase()}_click`);
  }

  return (
    <div
      onClick={handleClick}
      className="contactdiv"
    >
      {<Logo className="contact-link-icon" />}
      <h4 className="contact-link-title">{title}</h4>
    </div>
  );
}
function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xqagbyok", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        e.target.reset();
        setStatus("success");
        trackEvent("contact_form_sucess");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        trackEvent("contact_form_error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      trackEvent("contact_form_error");
    }
  }
  return (
    <div id="contact" className="section-padding">
      <div className="container">
        <h1 className="sectionh1">Get In Touch</h1>

        <div className="contact-content">
          <div className="contact-links">
            <h3 className="contact-content-title">Reach Out</h3>
            <p className=" contact-link-description">
              Let’s turn ideas into interactive experiences. Feel free to
              connect, collaborate, or just talk code.
            </p>

            <div className="contact-links-grid">
              {contacts.map((contact) => (
                <SingleContactDiv
                  key={contact.id}
                  title={contact.title}
                  url={contact.url}
                  Logo={contact.Logo}
                />
              ))}
            </div>

            <p className="contact-availability">
              Thanks for visiting — open to collaboration, internships, or
              full-time roles!
            </p>
          </div>

          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">Send a Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label p-josefin">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  id="message"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="form-submit"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Sent!"
                    : "Send Message"}
              </button>

              {status === "success" && (
                <p className="form-message form-message-success">
                  Message sent successfully! 'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="form-message form-message-error">
                  Something went wrong. Please try again or email me directly
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
