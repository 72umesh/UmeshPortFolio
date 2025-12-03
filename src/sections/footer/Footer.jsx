import "./Footer.css";

import { socials, links } from "./Footerdata";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h4>Check My Projects</h4>
        <ul>
          {links.map((link) => (
            <li id={link.id}>
              <a href={link.href} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="copy my">
          <p>
            ©{new Date().getFullYear()} Umesh Portfolio. All Rights Reserved.
          </p>
        </div>
        <p className="my myname">Design and Built By: Umesh Pal</p>
        <div className="socials my">
          {socials.map((social) => (
            <a href={social.url} key={social.id} target="_blank">
              <social.Logo />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
