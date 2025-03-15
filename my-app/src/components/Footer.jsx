import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-start gap-4">

          <div className="w-full md:w-3/12">
            <h2 className="text-xl font-bold mb-2">LOGO</h2>
            <p className="text-xs leading-relaxed">
              Experience The Convenience Of Recovery Delivered, Your Trusted
              Source For Online Medication Delivery. We Bring The Pharmacy To
              Your Doorstep, Ensuring Fast, Discreet, And Reliable Service.
            </p>
          </div>


          <div className="flex flex-wrap w-6/12 justify-between">
 
            <div className="w-4/12 md:w-2/12">
              <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-xs">
                <li>Home</li>
                <li>About Us</li>
                <li>Owners</li>
                <li>Tenants</li>
                <li>Properties</li>
              </ul>
            </div>

            <div className="w-4/12 md:w-2/12">
              <h3 className="text-sm font-semibold mb-2">Other Links</h3>
              <ul className="space-y-1 text-xs">
                <li>Online Medications</li>
                <li>Download App</li>
                <li>Store Owners</li>
                <li>Online Urgent Care</li>
                <li>FAQ</li>
              </ul>
            </div>


            <div className="w-4/12 md:w-2/12">
              <h3 className="text-sm font-semibold mb-2">Contact</h3>
              <p className="text-xs mb-2">+1 (865) 759 9386</p>

              <h4 className="text-sm font-semibold">Social Media</h4>
              <div className="flex items-center space-x-3 mt-1">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaInstagram size={16} />
                </a>
     

              </div>
              <h3 className="text-xs font-semibold mt-[5vh]">        
              Developed By Ropstam</h3>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-200 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-500">
 
            <div className="text-center sm:text-left">
              ©2025 - Recovery Delivered. All Rights Reserved
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
