import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-blue-600">
            Cheema Real Estate
          </a>
        </div>


        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/properties" className="text-gray-700 hover:text-blue-600">Properties</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>

        <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search properties..."
            className="px-4 py-2 w-64 focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2">
            Search
          </button>
        </div>


        <div className="hidden md:flex">
          <a href="/signup" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Sign Up
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
