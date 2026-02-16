import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { trackEvent } from "../../utils/analytics";
import NavItems from "../../data/headerdata";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionName) => {
    trackEvent("header_nav_click", {
      section: sectionName?.toLowerCase(),
    });
    setIsMenuOpen(false);
  };
  const handleMobileMenuOpen = () => {
    setIsMenuOpen(true);
    trackEvent("mobile_menu_open");
  };

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
    trackEvent("mobile_menu_close");
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
            onClick={handleMobileMenuOpen}
          />

          {isMenuOpen && (
            <div className="smallscreen-overlay slide-bottom">
              <FaTimes
                fontSize={27}
                className="overlay-close"
                onClick={handleMobileMenuClose}
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
