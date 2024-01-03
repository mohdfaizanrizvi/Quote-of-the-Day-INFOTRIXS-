import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-orange-700 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/442/858/large_2x/f-letter-logo-template-initials-sign-free-vector.jpg"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-row space-x-8 mt-1 font-medium ">
              
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/search">
                  Search
                </NavLink>
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
