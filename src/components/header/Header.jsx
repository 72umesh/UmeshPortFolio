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
          <p className="navbar-logo-name">Umesh Pal</p>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="nav-smallscreen">
          <GiHamburgerMenu fontSize={27} onClick={() => setIsOpen(true)} />

          {isOpen && (
            <div className="smallscreen-overlay flex-center slide-bottom">
              <FaTimes
                fontSize={27}
                onClick={() => setIsOpen(false)}
                className="overlay-close"
              />
              <ul class="nav-smallscreen-links">
                <li>
                  <a href="#home" onClick={() => setIsOpen(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={() => setIsOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setIsOpen(false)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Contact
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
