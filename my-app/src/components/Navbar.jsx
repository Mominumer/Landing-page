import React from 'react';

const Navbar = () => {
  const navItems = ["Home", "About Us", "Owners", "Tenants", "Properties"];

  return (
    <div className="w-full sticky  top-10 left-0 z-10 flex justify-center">
      <nav className="bg-opacity-50 rounded-lg p-4 max-w-6xl w-full flex items-center justify-between shadow-md backdrop-blur-xs">
        <h1 className="text-3xl font-semibold text-white">LOGO</h1>
        
  
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
          Start Treatment
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
