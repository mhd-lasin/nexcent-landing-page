import Image from "next/image";
import icon1 from "../assets/Icon (1).png";
import icon2 from "../assets/Icon (2).png";
import icon3 from "../assets/Icon (3).png";

const Cards = () => {
  return (
    <section className="flex flex-col text-center mt-8 px-4 lg:px-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 drop-shadow-md tracking-wide">
        Manage your entire community
      </h2>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 drop-shadow-md tracking-wide">
        in a single system
      </h2>
      <p className="font-light mt-2 text-gray-600 drop-shadow-md max-w-lg mx-auto">
        Who is Nextcent suitable for?
      </p>

      {/* Card Container */}
      <div className="flex flex-wrap justify-around gap-6 mt-6">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center w-52 h-44 sm:w-60 sm:h-52 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex items-center justify-center h-12 w-12 mb-4">
            <Image src={icon1} alt="Icon 1" />
          </div>
          <h3 className="text-gray-800 text-lg font-bold">Membership Organisations</h3>
          <p className="text-gray-600 text-xs text-center mt-2 px-2">
            This card has a shadow that is darker on the sides and bottom.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center w-52 h-44 sm:w-60 sm:h-52 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex items-center justify-center h-12 w-12 mb-4">
            <Image src={icon2} alt="Icon 2" />
          </div>
          <h3 className="text-gray-800 text-lg font-bold">National Associations</h3>
          <p className="text-gray-600 text-xs text-center mt-2 px-2">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center w-52 h-44 sm:w-60 sm:h-52 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex items-center justify-center h-12 w-12 mb-4">
            <Image src={icon3} alt="Icon 3" />
          </div>
          <h3 className="text-gray-800 text-lg font-bold">Clubs And Groups</h3>
          <p className="text-gray-600 text-xs text-center mt-2 px-2">
            Ideal for managing corporate memberships and communications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
