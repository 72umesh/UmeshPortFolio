import Resume from "../../assets/Resume.pdf";
import Avatar from "../../assets/HomeImage.png";
import Tooltip from "../../components/tooltip/Tooltip";
import ContactDetails from "../../data/homedata";
import Button from "../../components/button/Button";
import { trackEvent } from "../../utils/analytics";
import "./Home.css";


function Home() {
  function handleViewResume() {
    window.open(Resume, "_blank");
    trackEvent("resume_click");
  }
  function handleContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleSocialClick = (eventName) => {
    trackEvent(eventName);
  };
  return (
    <section id="home" className="home-section container">
        <div className="home-content">
          <div className="home-avatar">
            <img src={Avatar} alt="Umesh Kumar Pal" />
          </div>

          <h1 className="home-name">Umesh Kumar Pal</h1>

          <p className="home-roles">Developer · Engineer · Contributor</p>

          <div className="home-actions">
            <Button variant="primary" size="md" onClick={handleViewResume}>
              Resume
            </Button>
            <Button variant="primary" size="md" onClick={handleContact}>
              Contact
            </Button>
          </div>

          <div className="home-social">
            {ContactDetails.map((contact) => (
              <Tooltip key={contact.title} text={contact.title}>
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  onClick={() => handleSocialClick(contact.event_name)}
                >
                  <contact.Logo />
                </a>
              </Tooltip>
            ))}
          </div>

          <p className="home-about">
            I build clean, carefully crafted web interfaces. While frontend is
            my strength, I’m comfortable working across the stack when needed to
            ship real products. I care less about titles and more about building
            things that work well and feel right.
          </p>
        </div>
    </section>
  );
}
export default Home;

// [Avatar]
// [Umesh Kumar Pal]
// [Developer . Engineer . Contributor ]
// [Resume button], [Contact button]
// [Github, Twitter, Linkedin]
