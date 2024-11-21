"use client";
import Image from "next/image";
import learnmore from "../assets/learnmore.png";
import LearnMoreModal from "../components/modals/LearnMoreModal";
import { useState } from "react";

const LearnMore = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="mt-8 px-4 sm:px-8 lg:px-24 flex flex-col lg:flex-row justify-center items-center lg:h-auto">
      {/* Left side: Image */}
      <div className="lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0 lg:justify-start">
        <Image
          src={learnmore}
          alt="Learn More"
          className="w-[307.66px] h-[301.4px] sm:w-[400px] sm:h-[400px]"
        />
      </div>

      {/* Right side: Content */}
      <div className="lg:w-3/5 text-center lg:text-left">
        <div className="mb-4">
          {/* Apply the custom styles here */}
          <h1
            className="sm:text-7xl text-2xl mt-4 lg:mt-0"
            style={{
              fontFamily: "Inter",
              fontSize: "25.06px",
              fontWeight: 600,
              lineHeight: "30.63px",
            }}
          >
            The unseen of spending three
            <div>
              <h1 className="text-green-600">years at Pixelgrade</h1>
            </div>
          </h1>
        </div>
        <div className="text-gray-500 mt-4 sm:max-w-xl mx-auto lg:text-left lg:ml-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </div>

        <button
          onClick={openModal}
          className="bg-green-600 text-white h-[34px] w-[105px] mt-6 rounded-md hover:bg-green-700 mx-auto sm:w-[150px] sm:h-[40px] lg:mx-0"
        >
          Learn More
        </button>
      </div>

      {showModal && <LearnMoreModal closeModal={closeModal} />}
    </section>
  );
};

export default LearnMore;
