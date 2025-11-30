import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My Projects", link: "#projects" },
  ];

  /* ========== NEW helper: smooth-scroll to section and close mobile menu ========== */
  const handleNavClick = (e, hash) => {
    // keep anchor behavior consistent: prevent default jump and do smooth scroll
    e.preventDefault();

    // close mobile menu if open
    setIsOpen(false);

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // compute header height dynamically so the target is not hidden under the fixed header
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    // get top position relative to document, subtract header height + small gap
    const rect = el.getBoundingClientRect();
    const targetY = window.pageYOffset + rect.top - headerHeight - 8;

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };
  /* ================================================================================ */

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 text-white"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-4xl font-bold italic text-white"
        >
          Sanskar Nanda
        </a>

        {/* Mobile Menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen((s) => !s)}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX className="w-8 h-8 text-white" /> : <FiMenu className="w-8 h-8 text-white" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              onClick={(e) => handleNavClick(e, link.link)}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}

          {/* Contact: changed to anchor so it navigates to #contact; uses same handler */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
        role="dialog"
        aria-modal={isOpen}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <FiX className="w-8 h-8" />
        </button>

        {/* Mobile Links: close menu + scroll */}
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            onClick={(e) => handleNavClick(e, link.link)}
            className="text-lg text-white hover:text-gray-300"
          >
            {link.name}
          </a>
        ))}

        {/* Mobile Contact */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
