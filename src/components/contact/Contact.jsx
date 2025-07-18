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
  return (
    <div id="contact" className="section-padding">
      <h1 className="sectionh1">Get In Touch</h1>
      <p className="p-quicksand subheading">
        Let’s turn ideas into interactive experiences. Feel free to connect,
        collaborate, or just talk code.
      </p>

      <div className="contact-container">
        <div className="circle-right"></div>

        {contacts.map((contact) => (
          <SingleContactDiv
            key={contact.id}
            title={contact.title}
            url={contact.url}
            Logo={contact.Logo}
          />
        ))}
        <p className="p-quicksand subheading">
          Thanks for visiting — open to collaboration, internships, or full-time
          roles!
        </p>
      </div>
    </div>
  );
}
export default Contact;
