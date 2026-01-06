import { useState } from "react";
import dropDownStyles from "./dropDown.module.scss";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#articles", label: "Articles" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={dropDownStyles.responsiveNav}>
      {/* Desktop Navigation - Horizontal */}
      <nav className={dropDownStyles.desktopNav}>
        <ul className={dropDownStyles.navLinks}>
          {navigationLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation - Dropdown */}
      <div className={dropDownStyles.mobileNav}>
        <button className={dropDownStyles.menuButton} onClick={toggleDropdown} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
          <span className={dropDownStyles.hamburger}></span>
          <span className={dropDownStyles.hamburger}></span>
          <span className={dropDownStyles.hamburger}></span>
        </button>

        {isOpen && (
          <div className={dropDownStyles.dropDownContent}>
            <ul className={dropDownStyles.dropDownLinks}>
              {navigationLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href} onClick={closeDropdown}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isOpen && <div className={dropDownStyles.backdrop} onClick={closeDropdown} />}
      </div>
    </div>
  );
}
export { DropDown };
