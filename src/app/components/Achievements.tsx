import Image from "next/image";
import row1 from "../assets/row1.png";
import row2 from "../assets/row2.png";
import row3 from "../assets/row3.png";
import row4 from "../assets/row4.png";

const Achievements = () => {
  return (
    <div className="px-6 lg:px-24 py-12 flex flex-col lg:flex-row items-center bg-gray-50 mt-20">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h2
          style={{
            fontFamily: "Inter",
            fontSize: "25.06px",
            fontWeight: 600,
            lineHeight: "30.63px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
          className="text-gray-800"
        >
          Helping a local
        </h2>
        <div>
          <h2
            style={{
              fontFamily: "Inter",
              fontSize: "25.06px",
              fontWeight: 600,
              lineHeight: "30.63px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
            className="text-green-600"
          >
            business reinvent itself
          </h2>
        </div>
        <div
          className="text-gray-500 mt-4"
          style={{
            fontFamily: "Inter",
            fontSize: "11.14px",
            fontWeight: 400,
            lineHeight: "16.71px",
            color: "rgba(24, 25, 31, 1)",
          }}
        >
          We reached here with our hard work and dedication.
        </div>
      </div>

      {/* Right Section - Image Grid */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-8 lg:mt-0 w-full">
        <Image
          src={row1}
          alt="Image 1"
          className="w-full h-[43px] object-contain"
        />
        <Image
          src={row2}
          alt="Image 2"
          className="w-full h-[43px] object-contain"
        />
        <Image
          src={row3}
          alt="Image 3"
          className="w-full h-[43px] object-contain"
        />
        <Image
          src={row4}
          alt="Image 4"
          className="w-full h-[43px] object-contain"
        />
      </div>
    </div>
  );
};

export default Achievements;
