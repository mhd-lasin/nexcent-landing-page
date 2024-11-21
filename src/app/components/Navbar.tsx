"use client";
import { useState, useEffect } from "react";
import RegisterModal from "../components/modals/RegisterModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    { href: "#home", label: "HOME" },
    { href: "#features", label: "FEATURES" },
    { href: "#community", label: "COMMUNITY" },
    { href: "#blog", label: "BLOG" },
    { href: "#pricing", label: "PRICING" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === "modal-overlay") {
        closeModal();
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const renderMenuItems = (additionalClasses = "") => (
    <ul className={`flex ${additionalClasses}`}>
      {menuItems.map((item) => (
        <li key={item.href} className="my-2">
          <a
            href={item.href}
            className="text-gray-500 hover:text-green-700 hover:underline"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-white w-full z-10">
      <nav className="flex justify-between items-center p-4 md:px-8 lg:px-24">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">Nexcent</div>

        {/* Desktop Menu and Register Button */}
        <div className="hidden md:flex items-center space-x-8">
          {renderMenuItems("space-x-4")}
          <button
            onClick={openModal}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Register Now →
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-6 bg-white shadow-lg">
          {renderMenuItems("flex-col items-center space-y-4")}
          <button
            onClick={openModal}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Register Now →
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && <RegisterModal closeModal={closeModal} />}
    </section>
  );
};

export default Navbar;
