import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { trackEvent } from "../../utils/analytics";
import NavItems from "../../data/headerdata";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSelection, setActiveSelection] = useState("home");

  const handleNav = (section) => {
    trackEvent(`nav_${section}`);
  };

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <p className="navbar-logo-name">Umesh Pal.</p>
        </div>

        <ul className="nav-links">
          {NavItems.map((navlink) =>(
            <li key={navlink.id}>
              <a href={navlink.href}>{navlink.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-smallscreen">
          <GiHamburgerMenu
            fontSize={27}
 
            style={{ cursor: "pointer" }}
          />

          {isMenuOpen && (
            <div className="smallscreen-overlay flex-center slide-bottom">
              <FaTimes
                fontSize={27}

                className="overlay-close"
              />
              <ul class="nav-smallscreen-links">
                <li>
                  <a
                    href="#home"
                    onClick={() => {setIsOpen(false); handleNav('home')} }
                    className="p-quicksand"
                  >
                    Home.
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={() => {setIsOpen(false); handleNav('about')} }
                    className="p-quicksand"
                  >
                    About.
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    onClick={() => {setIsOpen(false); handleNav('experience')} }
                    className="p-quicksand"
                  >
                    Experience.
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => {setIsOpen(false); handleNav('project')} }
                    className="p-quicksand"
                  >
                    Projects.
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => {setIsOpen(false); handleNav('contact')} }
                    className="p-quicksand"
                  >
                    Contact.
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
export default Header;
