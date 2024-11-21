'use client';
import { MdClose } from 'react-icons/md';

interface LearnMoreModalProps {
  closeModal: () => void;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ closeModal }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-2xl relative mx-4 sm:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <MdClose size={24} />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Community Management Services</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Our community management services are designed to help you build and engage a thriving online community. From moderation to content curation, we’ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Moderation</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Our team of experienced moderators will ensure your community stays safe and on-topic. We handle flagging, banning, and conflict resolution.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Content Curation</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We’ll work with you to curate high-quality content that keeps your community engaged and coming back. From blog posts to discussion topics, we’ve got you covered.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Our advanced analytics tools will give you insights into your community’s activity, engagement, and growth. Make data-driven decisions to improve your community.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Engagement</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We’ll help you foster a thriving, engaged community through events, challenges, and other interactive experiences. Keep your members coming back.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={closeModal}
            className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreModal;
