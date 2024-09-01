import React, { useState } from "react";
import profilePic from '../../picture/profile.jpg'
const Sidebar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };
   
  
  const scrollToSection = (event) => {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <nav
        className="fixed top-0 inset-x-0 z-20 flex items-center justify-between bg-neutral-50/50 border-b border-neutral-300 lg:px-[190px] px-4 py-4 dark:border-neutral-700 dark:bg-neutral-900/50 backdrop-blur-lg"
        aria-label="penguin ui menu"
        onClick={(e) => {
          if (!e.target.closest("button")) {
            setMobileMenuIsOpen(false);
          }
        }}
      >
        {/* Brand Logo */}
        <a href="#" className="text-2xl font-bold text-neutral-900 dark:text-white">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={profilePic}/>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-4 md:flex">
          <li>
          <a
                href="#"
                className="w-full text-lg font-medium text-neutral-600 focus:underline dark:text-neutral-300"
              >
                Home
              </a>
          </li>
          <li>
            <a
              href="#my-skills"
              onClick={scrollToSection}
              className="font-medium text-neutral-600 underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-neutral-300 dark:hover:text-white"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#myEducation"
              onClick={scrollToSection}
              className="font-medium text-neutral-600 underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-neutral-300 dark:hover:text-white"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#my-projects"
              className="font-medium text-neutral-600 underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-neutral-300 dark:hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#my-contact"
              className="font-medium text-neutral-600 underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-neutral-300 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuIsOpen}
          className={`flex text-neutral-600 dark:text-neutral-300 md:hidden ${
            mobileMenuIsOpen ? "fixed top-6 right-6 z-20" : ""
          }`}
          aria-label="mobile menu"
          aria-controls="mobileMenu"
        >
          {mobileMenuIsOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuIsOpen && (
          <ul
            className="fixed max-h-svh overflow-y-auto inset-x-0 top-0 z-10 flex flex-col divide-y divide-neutral-300 rounded-b-md border-b border-neutral-300 bg-neutral-50 px-6 pb-6 pt-20 dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 md:hidden"
            id="mobileMenu"
          >
            <li className="py-4">
            <a
                href="#"
                className="w-full text-lg font-medium text-neutral-600 focus:underline dark:text-neutral-300"
              >
               Home
              </a>
            </li>
            <li className="py-4">
              <a
                href="#my-skills"
                onClick={scrollToSection}
                className="w-full text-lg font-medium text-neutral-600 focus:underline dark:text-neutral-300"
              >
                Skills
              </a>
            </li>
            <li className="py-4">
              <a
                href="#myEducation"
                onClick={scrollToSection}
                className="w-full text-lg font-medium text-neutral-600 focus:underline dark:text-neutral-300"
              >
                Education
              </a>
            </li>
            <li className="py-4">
              <a
                href="#my-projects"
                className="w-full text-lg font-medium text-neutral-600 focus:underline dark:text-neutral-300"
              >
                Projects
              </a>
            </li>
            <li className="py-4">
              <a
                href="#my-contact"
                className="w-full text-lg font-medium text-neutral-600 focus:underline dark:text-neutral-300"
              >
               Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
