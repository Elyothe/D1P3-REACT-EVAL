import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-17375E text-black shadow-md w-full">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-afacad hover:text-gray-200">
          The WITCHER
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/Contrat"
            className="text-black font-afacad hover:text-gray-200"
          >
            Contrat
          </Link>
          <Link
            to="/Login"
            className="text-black font-afacad hover:text-gray-200"
          >
            My Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
