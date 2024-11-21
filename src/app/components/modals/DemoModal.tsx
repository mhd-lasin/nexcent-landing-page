import { MdClose } from "react-icons/md";

interface DemoModalProps {
  closeModal: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ closeModal }) => {
  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md relative mx-4 sm:mx-8"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <MdClose size={24} />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <h2 className="text-2xl font-bold mb-2">Schedule a demo</h2>
          <p className="text-gray-500">Fill out the form below to schedule a personalized demo of our product</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            {/* Name Input */}
            <div className="w-full">
              <label htmlFor="name" className="block text-gray-600 mb-1 text-left">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Email Input */}
            <div className="w-full">
              <label htmlFor="email" className="block text-gray-600 mb-1 text-left">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Company Input (for Demo purpose) */}
          <div>
            <label htmlFor="company" className="block text-gray-600 mb-1 text-left">Company</label>
            <input
              id="company"
              type="text"
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 "
          >
            Schedule Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;
