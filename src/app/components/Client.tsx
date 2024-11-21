import Image from "next/image";
import clientimage1 from "../assets/clientimg1.png";
import clientimage2 from "../assets/clientimg2.png";
import clientimage3 from "../assets/clientimg3.png";
import clientimage4 from "../assets/clientimg4.png";
import clientimage5 from "../assets/clientimg5.png";
import clientimage6 from "../assets/clientimg6.png";

const Client = () => {
  return (
    <section className="flex flex-col items-center text-center mt-8 px-4 sm:px-8 lg:px-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 drop-shadow-md tracking-wide">
        Our Clients
      </h2>
      <p className="font-light mt-2 text-gray-600 drop-shadow-md max-w-md">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex flex-wrap justify-evenly items-center gap-4 mt-8 mb-4 w-full max-w-5xl">
        <div className="flex justify-center">
          <Image src={clientimage1} alt="Client 1" width={60} height={60} />
        </div>
        <div className="flex justify-center">
          <Image src={clientimage2} alt="Client 2" width={60} height={60} />
        </div>
        <div className="flex justify-center">
          <Image src={clientimage3} alt="Client 3" width={60} height={60} />
        </div>
        <div className="flex justify-center">
          <Image src={clientimage4} alt="Client 4" width={60} height={60} />
        </div>
        <div className="flex justify-center">
          <Image src={clientimage5} alt="Client 5" width={60} height={60} />
        </div>
        <div className="flex justify-center">
          <Image src={clientimage6} alt="Client 6" width={60} height={60} />
        </div>
      </div>
    </section>
  );
};

export default Client;
