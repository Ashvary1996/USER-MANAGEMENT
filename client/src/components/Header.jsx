import React from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center p-4 bg-teal-500 text-white sticky top-0 z-10  ">
      <div className="text-2xl font-bold">
        <span>
          <Link to="/ ">Logo</Link>
        </span>
      </div>
      <div>
        {location.pathname === "/" || location.pathname === "/users" ? (
          <Link
            to="/all-users"
            className="bg-white text-teal-500 py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            View Users
          </Link>
        ) : location.pathname === "/edit-user" ? (
          <Link
            to="/all-users"
            className="bg-white text-teal-500 py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Go Back
          </Link>
        ) : (
          <Link
            to="/"
            className="bg-white text-teal-500 py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Create User
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
