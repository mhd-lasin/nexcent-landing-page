"use client";
import DemoModal from "../components/modals/DemoModal";
import { useState } from "react";

const Demo = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="flex flex-col text-center mt-16 px-4 lg:px-24 bg-gray-50">
      <div className="w-[617.41px] h-[106px] mx-auto">
        <h2 
          className="text-center font-semibold text-gray-800 drop-shadow-md tracking-wide mt-5"
          style={{
            fontFamily: "Inter",
            fontSize: "44.55px",
            fontWeight: "600",
            lineHeight: "35.9px",
          }}
        >
          Pellentesque suscipit
        </h2>
        <h2 
          className="text-center font-semibold text-gray-800 drop-shadow-md tracking-wide mt-4"
          style={{
            fontFamily: "Inter",
            fontSize: "44.55px",
            fontWeight: "600",
            lineHeight: "45.9px",
          }}
        >
          fringilla libero eu.
        </h2>
      </div>
      <div className="flex justify-center mt-6"> {/* Centering the button */}
        <button 
          onClick={openModal}
          className="bg-green-600 text-white h-[34px] w-[105px] rounded-md hover:bg-green-700 sm:w-[150px] sm:h-[40px]"
        >
          Get A Demo
        </button>
      </div>
      {showModal && <DemoModal closeModal={closeModal} />}
    </section>
  );
}

export default Demo;
