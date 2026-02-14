import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { trackEvent } from "../../utils/analytics";
import NavItems from "../../data/headerdata";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    trackEvent(`nav_${section}`);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <p className="navbar-logo-name">Umesh Pal.</p>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {NavItems.map((navlink) => (
            <li key={navlink.id}>
              <a
                href={navlink.href}
                className={`nav-link`}
                onClick={() => handleNavClick(navlink.id)}
              >
                {navlink.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile  */}
        <div className="nav-smallscreen">
          <GiHamburgerMenu
            fontSize={27}
            style={{ cursor: "pointer" }}
            onClick={() => setIsMenuOpen(true)}
          />

          {isMenuOpen && (
            <div className="smallscreen-overlay slide-bottom">
              <FaTimes
                fontSize={27}
                className="overlay-close"
                onClick={() => setIsMenuOpen(false)}
              />
              <ul className="nav-smallscreen-links">
                {NavItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.id)}
                      className={`mobile-nav-link`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
export default Header;
