import footericon from "../assets/footericon.png";
import socialicon1 from "../assets/socialicon1.png";
import socialicon2 from "../assets/socialicon2.png";
import socialicon3 from "../assets/socialicon3.png";
import socialicon4 from "../assets/socialicon4.png";
import send from "../assets/send.png";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "rgba(38, 50, 56, 1)" }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center justify-between mt-5">
        
        {/* Logo and Info */}
        <div className="p-5">
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

          <div className="flex space-x-2 mt-8">
            <Image src={socialicon1} alt="Social Icon 1" width={38} height={38} />
            <Image src={socialicon2} alt="Social Icon 2" width={38} height={38} />
            <Image src={socialicon3} alt="Social Icon 3" width={38} height={38} />
            <Image src={socialicon4} alt="Social Icon 4" width={38} height={38} />
          </div>
        </div>

        {/* Company Links */}
        <div className="p-5">
          <h2 className="text-lg font-medium text-white">Company</h2>
          <Link className="my-3 block text-white" href="/#">About us</Link>
          <Link className="my-3 block text-white" href="/#">Blog</Link>
          <Link className="my-3 block text-white" href="/#">Contact us</Link>
          <Link className="my-3 block text-white" href="/#">Pricing</Link>
          <Link className="my-3 block text-white" href="/#">Testimonials</Link>
        </div>

        {/* Support Links */}
        <div className="p-5">
          <h2 className="text-lg font-medium text-white">Support</h2>
          <Link className="my-3 block text-white" href="/#">Help Center</Link>
          <Link className="my-3 block text-white" href="/#">Terms of service</Link>
          <Link className="my-3 block text-white" href="/#">Legal</Link>
          <Link className="my-3 block text-white" href="/#">Privacy Policy</Link>
          <Link className="my-3 block text-white" href="/#">Status</Link>
        </div>

        {/* Stay Updated */}
        <div className="p-5">
          <h2 className="text-lg font-medium text-white">Stay up to date</h2>
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
