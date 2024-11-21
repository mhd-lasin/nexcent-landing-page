import Image from "next/image";
import image9 from "../assets/image 9.png";
import Logo1 from "../assets/Logo (1).png";
import Logo2 from "../assets/Logo (2).png";
import Logo3 from "../assets/Logo (3).png";
import Logo4 from "../assets/Logo (4).png";
import Logo5 from "../assets/Logo (5).png";

const Customers = () => {
  return (
    <div className="mt-6 px-6 sm:px-10 lg:px-24 flex flex-col items-center bg-gray-50 py-12">
      {/* Image and Text content */}
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Left side: Image */}
        <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
          <Image 
            src={image9} 
            alt="Customer" 
            className="w-full max-w-[226.92px] max-h-[226.92px] h-auto rounded-tl-lg" 
            style={{ borderRadius: "5.57px 0 0 0" }} 
          />
        </div>

        {/* Right side: Text content */}
        <div className="w-full text-center lg:text-left lg:ml-6">
          <p className="text-gray-500 text-sm sm:text-base mb-6 lg:mb-4 mx-4 lg:mx-0">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
            mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
            placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg mt-4">
            Tim Smith
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            British Dragon Boat Racing Association
          </p>
        </div>
      </div>

      {/* Logo Images and Meet All Customers */}
      <div className="flex items-center mt-8 w-full max-w-2xl lg:ml-40 gap-5">
        {/* Logo Images */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-20">
          <Image src={Logo1} alt="Logo 1" className="w-8 h-auto" />
          <Image src={Logo2} alt="Logo 2" className="w-8 h-auto" />
          <Image src={Logo3} alt="Logo 3" className="w-8 h-auto" />
          <Image src={Logo4} alt="Logo 4" className="w-8 h-auto" />
          <Image src={Logo5} alt="Logo 5" className="w-8 h-auto" />
        </div>

        {/* Meet All Customers Text */}
        <p className="text-green-600 ml-4">
          Meet all customers
        </p>
      </div>
    </div>
  );
};

export default Customers;