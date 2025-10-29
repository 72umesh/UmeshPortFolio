import { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const contacts = [
  {
    id: 1,
    title: "LinkedIn",
    Logo: FaLinkedin,
    url: "https://www.linkedin.com/in/umeshkumarpal/",
  },
  {
    id: 2,
    title: "Github",
    Logo: FaGithub,
    url: "https://github.com/72umesh",
  },
  {
    id: 3,
    title: "umeshpal8141@gmail.com",
    Logo: MdEmail,
    url: "mailto:umeshpal8141@gmail.com",
  },
];
function SingleContactDiv({ title, url, Logo }) {
  function handleClick() {
    console.log("Clicked", url);
    window.open(url, "_blank");
  }

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      className="contactdiv"
    >
      {<Logo className="logo" />}
      <h4>{title}</h4>
    </div>
  );
}
function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xqagbyok", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      e.target.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }
  return (
    <div id="contact" className="section-padding">
      <h1 className="sectionh1">Get In Touch</h1>

      <div className="main-container-contact">
        <div className="contact-container">
          <div className="circle-right"></div>

          <p className="p-quicksand subheading">
            Let’s turn ideas into interactive experiences. Feel free to connect,
            collaborate, or just talk code.
          </p>

          {contacts.map((contact) => (
            <SingleContactDiv
              key={contact.id}
              title={contact.title}
              url={contact.url}
              Logo={contact.Logo}
            />
          ))}
          <p className="p-quicksand subheading">
            Thanks for visiting — open to collaboration, internships, or
            full-time roles!
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label p-josefin">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email" className="form-label p-josefin">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message" className="form-label p-josefin">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            id="message"
            required
          ></textarea>
          <button
            type="submit"
            disabled={status === "sending"}
            className="p-quicksand"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Sent!"
              : "Send Message"}
          </button>
          {status === "success" && (
            <p className="success-message">
              Message sent successfully! Thank you for reaching out.
            </p>
          )}
          {status === "error" && (
            <p className="error-message"> Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
export default Contact;
