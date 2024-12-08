import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram, FaRegCopyright } from "react-icons/fa"; // Import copyright icon
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8">
      {/* Icons on the Right */}
      <div className="flex justify-end mb-6">
        <AiFillTwitterCircle className="text-xl mx-2 cursor-pointer text-gray-400 size-8" />
        <FaFacebook className="text-xl mx-2 cursor-pointer text-gray-400 size-7" />
        <TbBrandYoutubeFilled className="text-md mx-2 cursor-pointer text-black bg-slate-400 rounded-full size-7" />
        <FaInstagram className="text-sm mx-2 cursor-pointer text-gray-400 size-7 rounded-full " />
      </div>

      {/* Footer Content with 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div>
          <p className="mb-3">FIND A STORE</p>
          <p className="mb-2 text-gray-300">BECOME A MEMBER</p>
          <p className="mb-2 text-gray-300">SIGN UP FOR EMAIL</p>
          <p className="mb-2 text-gray-300">Placeholder 4</p>
          <p className="mb-2 text-gray-300">STUDENT DISCOUNTS</p>
        </div>

        {/* Column 2 */}
        <div>
          <p className="mb-3">GET HELP</p>
          <p className="mb-2 text-gray-400">Order Status</p>
          <p className="mb-2 text-gray-400">Delivery</p>
          <p className="mb-2 text-gray-400">Returns</p>
          <p className="mb-2 text-gray-400">Payment Options</p>
          <p className="mb-2 text-gray-400">Contact Us On Nike.com Inquiries</p>
          <p className="mb-2 text-gray-400">Contact Us On All Other Inquiries</p>
        </div>

        {/* Column 3 */}
        <div>
          <p className="mb-3">ABOUT NIKE</p>
          <p className="mb-2 text-gray-400">News</p>
          <p className="mb-2 text-gray-400">Careers</p>
          <p className="mb-2 text-gray-400">Investors</p>
          <p className="mb-2 text-gray-400">Sustainability</p>
        </div>
      </div>

      {/* Footer Line with Location Icon and Links */}
      <div className="bg-black text-white flex flex-col sm:flex-row justify-between items-center px-6 py-3 mt-6">
        {/* Location and Copyright Section */}
        <div className="flex items-center mb-4 sm:mb-0 text-center sm:text-left">
          {/* Show the copyright icon and text on small screens */}
          <FaRegCopyright className="text-black bg-gray-200 p-2 rounded-full mr-2 hidden sm:block" />
          <span>India</span>
          <span className="text-gray-400 ml-2">2023 Nike, Inc. All Rights Reserved</span>
        </div>

        {/* Links Section - Hidden on Small Screens */}
        <div className=" gap-4 text-gray-400 text-center sm:text-right hidden sm:flex">
          <span>Guides</span>
          <span>Terms of Sale</span>
          <span>Terms of Use</span>
          <span>Nike Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
