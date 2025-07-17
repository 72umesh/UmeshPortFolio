import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <p className="navbar-logo-name">Umesh Pal.</p>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home" className="p-quicksand">
              Home.
            </a>
          </li>
          <li>
            <a href="#about" className="p-quicksand">
              About.
            </a>
          </li>
          <li>
            <a href="#experience" className="p-quicksand">
              Experience.
            </a>
          </li>
          <li>
            <a href="#projects" className="p-quicksand">
              Projects.
            </a>
          </li>
          <li>
            <a href="#contact" className="p-quicksand">
              Contact.
            </a>
          </li>
        </ul>

        <div className="nav-smallscreen">
          <GiHamburgerMenu
            fontSize={27}
            onClick={() => setIsOpen(true)}
            style={{ cursor: "pointer" }}
          />

          {isOpen && (
            <div className="smallscreen-overlay flex-center slide-bottom">
              <FaTimes
                fontSize={27}
                onClick={() => setIsOpen(false)}
                className="overlay-close"
              />
              <ul class="nav-smallscreen-links">
                <li>
                  <a
                    href="#home"
                    onClick={() => setIsOpen(false)}
                    className="p-quicksand"
                  >
                    Home.
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={() => setIsOpen(false)}
                    className="p-quicksand"
                  >
                    About.
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    onClick={() => setIsOpen(false)}
                    className="p-quicksand"
                  >
                    Experience.
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => setIsOpen(false)}
                    className="p-quicksand"
                  >
                    Projects.
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
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
