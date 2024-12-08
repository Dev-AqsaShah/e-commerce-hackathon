import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCommentDots } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6">

        {/* Get Help Section */}
        <h1 className="text-3xl font-semibold text-center md:text-left">Get Help</h1>
        <div>
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Contact Us Section */}
        <div className="space-y-8">
          {/* Phone Contact */}
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-4xl text-black" />
            <div>
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <p className="text-gray-600">000 800 919 0566</p>
              <p className="text-gray-600">Products & Order: 24 hours a day, 7 days a week </p>
              <p className="text-gray-600">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>
          </div>

          {/* Message Contact */}
          <div className="flex items-start space-x-4">
            <FaCommentDots className="text-4xl text-black" />
            <div>
              <h3 className="text-xl font-semibold">Message Us</h3>
              <p className="text-gray-600">24 hours a day</p>
              <p className="text-gray-600">7 days a week</p>
            </div>
          </div>

          {/* Email Contact */}
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-4xl text-black" />
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-gray-600">We will reply within five business days</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-4xl text-black" />
            <div>
              <h3 className="text-xl font-semibold">STORE Location</h3>
              <p className="text-gray-600">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
