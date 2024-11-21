'use client';
import Image from "next/image";
import learnmore2 from "../assets/learnmore2.png";
import LearnMoreModal from "../components/modals/LearnMoreModal";
import { useState } from "react";

const LearnMore2 = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <section className="py-6 px-4 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start h-auto">
                {/* Left side: Image */}
                <div className="flex justify-center lg:justify-start mb-8 lg:mb-0 lg:w-1/2">
                    <Image src={learnmore2} alt="Learn more image" className="w-full max-w-[307.66px] h-auto" />
                </div>

                {/* Right side: Content */}
                <div className="lg:w-3/5 text-center lg:text-left">
                    <div className="mb-4">
                        <h1
                            className="sm:text-4xl text-xl font-semibold leading-tight"
                            style={{
                                fontFamily: "Inter",
                            }}
                        >
                            How to design your site footer like 
                            <span className="block text-3xl">we did</span>
                        </h1>
                    </div>
                    <div className="text-gray-500 mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </div>
                    <button 
                        onClick={openModal} 
                        className="bg-green-600 text-white mt-6 px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && <LearnMoreModal closeModal={closeModal} />}
        </section>
    );
}

export default LearnMore2;
