import Image from "next/image";
import Illustration from "../assets/Illustration.png";

const Hero = () => {
  return (
    <section className="bg-gray-50 mt-3 px-6 sm:px-10 lg:px-24 flex flex-col lg:flex-row justify-center items-center min-h-[70vh] lg:min-h-[90vh]">
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
        >
          Lessons and insights
          <span className="block text-green-600">from 8 years</span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg mt-2 max-w-md">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-6 transition-all duration-200">
          Register
        </button>
      </div>

      {/* Illustration Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <Image src={Illustration} alt="Illustration" className="w-64 h-auto lg:w-4/5" />
      </div>
    </section>
  );
};

export default Hero;
