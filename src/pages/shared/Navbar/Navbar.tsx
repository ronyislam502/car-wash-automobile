import { NavLink } from "react-router-dom";
import { navLinks } from "./NavItem";

type TNavLink = {
  name: string;
  path: string;
};

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm p-6 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg mt-3 p-2 w-52 z-10"
          >
            {navLinks.map((navLink: TNavLink, index) => (
              <li key={index} className="hover:bg-gray-100 rounded-md">
                <NavLink
                  to={navLink.path}
                  className="block px-4 py-2 text-gray-700 hover:text-gray-500 transition duration-300 ease-in-out btn btn-ghost"
                >
                  {navLink.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5  bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <h2 className="text-4xl font-bold">
            <span className="text-green-600">Fitness</span>{" "}
            <span className="text-red-500">Tools</span>
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu-horizontal space-x-3">
          {navLinks.map((navLink, index) => (
            <li key={index} className="relative group ">
              <NavLink
                to={navLink.path}
                className="text-gray-700 hover:text-gray-500 text-lg font-medium transition duration-300 ease-in-out btn btn-ghost"
              >
                {navLink.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5  bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
