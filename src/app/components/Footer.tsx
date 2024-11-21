import footericon from "../assets/footericon.png";
import socialicon1 from "../assets/socialicon1.png";
import socialicon2 from "../assets/socialicon2.png";
import socialicon3 from "../assets/socialicon3.png";
import socialicon4 from "../assets/socialicon4.png";
import send from "../assets/send.png";

import Image from "next/image";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "rgba(38, 50, 56, 1)" }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center flex justify-between mt-5">
        
        {/* Logo and Links */}
        <div className="p-5">
          {/* Icon and Nexcent Text */}
          <div className="flex items-center mb-3">
            <Image src={footericon} alt="Icon" width={50} height={50} className="mr-2" />
            <h2 className="text-3xl font-bold" style={{ color: "rgba(255, 255, 255, 1)" }}>Nexcent</h2>
          </div>
          <p className="text-left mt-4 p-5" style={{ color: "rgba(255, 255, 255, 1)", fontFamily: "Inter", fontSize: "13.74px", fontWeight: "400", lineHeight: "13.92px" }}>
           Copyright © 2020 Landify UI Kit.
          </p>
          <p className="ml-4" style={{ color: "rgba(255, 255, 255, 1)", fontFamily: "Inter", fontSize: "13.74px", fontWeight: "400", lineHeight: "13.92px" }}>
            All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-2 mt-8">
            <Image src={socialicon1} alt="Social Icon 1" width={38} height={38} />
            <Image src={socialicon2} alt="Social Icon 2" width={38} height={38} />
            <Image src={socialicon3} alt="Social Icon 3" width={38} height={38} />
            <Image src={socialicon4} alt="Social Icon 4" width={38} height={38} />
          </div>
        </div>

        {/* Other Sections */}
        <div className="p-5">
          <h2 className="text-lg font-medium" style={{ color: "rgba(255, 255, 255, 1)" }}>Company</h2>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            About us
          </a>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Blog
          </a>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Contact us
          </a>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Pricing
          </a>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Testimonials
          </a>
        </div>

        <div className="p-5">
          <div className="text-lg font-medium" style={{ color: "rgba(255, 255, 255, 1)" }}>Support</div>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Help Center
          </a>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Terms of service
          </a>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Legal
          </a>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Privacy Policy
          </a>
          <a className="my-3 block" href="/#" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Status
          </a>
        </div>

        {/* Stay Updated Section */}
        <div className="p-5">
          <div className="text-lg font-medium" style={{ color: "rgba(255, 255, 255, 1)" }}>Stay up to date</div>
          <div className="relative my-3">
            <input
              className="rounded p-2 w-[230px] h-[35px] bg-gray-600 text-white outline-none pr-10"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <button type="submit" className="absolute inset-y-0 right-2 flex items-center">
              <Image src={send} alt="Send Icon" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
