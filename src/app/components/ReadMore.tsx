import Image from "next/image";
import image18 from "../assets/image 18.png";
import image19 from "../assets/image 19.png";
import image20 from "../assets/image 20.png";

const ReadMore = () => {
  return (
    <section className="flex flex-col items-center text-center mt-8 px-4 sm:px-8 lg:px-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 drop-shadow-md tracking-wide">
        Caring is the new marketing
      </h2>
      <p className="font-light mt-2 text-gray-600 drop-shadow-md max-w-lg">
        The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lots more.
      </p>

      {/* Container for images */}
      <div className="relative flex justify-between items-center mt-8 w-full flex-wrap gap-6">
        {/* Image 1 */}
        <div className="relative" style={{ width: "256.15px", height: "199.08px" }}>
          <Image
            src={image18}
            alt="Image 18"
            layout="responsive"
            width={256.15}
            height={199.08}
            className="object-cover rounded-[5.57px_0px_0px_0px]"
          />

          {/* Card 1 */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 p-[11.14px_0px_0px_0px] bg-gray-50 shadow-lg rounded-[5.57px_0px_0px_0px] w-[220.65px] h-[123.55px] z-10">
            <div className="flex flex-col items-center">
              <p className="font-[600] text-[13.92px] leading-[19.49px] text-center" style={{ fontFamily: "Inter", color: "rgba(113, 113, 113, 1)" }}>
                Creating Streamlined <br />Safeguarding Processes with OneRen
              </p>
              <a href="#" className="mt-4 flex items-center text-green-500 font-semibold">
                Readmore →
              </a>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative" style={{ width: "256.15px", height: "199.08px" }}>
          <Image
            src={image19}
            alt="Image 19"
            layout="responsive"
            width={256.15}
            height={199.08}
            className="object-cover rounded-[5.57px_0px_0px_0px]"
          />

          {/* Card 2 */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 p-[11.14px_0px_0px_0px]  bg-gray-50 shadow-lg rounded-[5.57px_0px_0px_0px] w-[220.65px] h-[123.55px] z-10">
            <div className="flex flex-col items-center">
              <p className="font-[600] text-[13.92px] leading-[19.49px] text-center" style={{ fontFamily: "Inter", color: "rgba(113, 113, 113, 1)" }}>
                What are your safeguarding responsibilities and how can <br /> you manage them?
              </p>
              <a href="#" className="mt-4 flex items-center text-green-500 font-semibold">
                Readmore →
              </a>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative" style={{ width: "256.15px", height: "199.08px" }}>
          <Image
            src={image20}
            alt="Image 20"
            layout="responsive"
            width={256.15}
            height={199.08}
            className="object-cover rounded-[5.57px_0px_0px_0px]"
          />

          {/* Card 3 */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 p-[11.14px_0px_0px_0px] bg-gray-50 shadow-lg rounded-[5.57px_0px_0px_0px] w-[220.65px] h-[123.55px] z-10">
            <div className="flex flex-col items-center">
              <p className="font-[600] text-[13.92px] leading-[19.49px] text-center" style={{ fontFamily: "Inter", color: "rgba(113, 113, 113, 1)" }}>
                Revamping the Membership <br /> Model with Triathlon <br /> Australia
              </p>
              <a href="#" className="mt-4 flex items-center text-green-500 font-semibold">
                Readmore →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
