import React, { useState, useRef, useEffect } from 'react';

const Nav = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header py-3 lg:py-[9.2px] bg-[#660000] sticky top-[-1px] left-0 right-0 z-40">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              className="max-w-[179px] xl:max-w-[250px]"
              src="/images/logo.svg"
              alt="logo"
            />
          </a>
          <ul className="nav-menu gap-[18px] hidden lg:flex">
            <li className="relative group">
              <a
                href="#0"
                className="text-white TuskerGrotesk5500Medium flex items-center gap-1 text-[12px] group"
              >
                ABOUT
                <svg
                  className="group-hover:-rotate-180 transition duration-300"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primary"
                    d="M4.00391 6.78906L8.00391 10.7891L12.0039 6.78906"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <ul className="submenu p-7 bg-white w-[260px] absolute top-[44px] xl:top-[47px] left-0 flex flex-col gap-5 first:gap-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li className="group/item leading-none flex items-center gap-[6px] hover:translate-x-2 transition-all duration-300">
                  <svg
                    className="flex-shrink-0 w-0 transition-all duration-300 group-hover/item:w-2"
                    height="3"
                    viewBox="0 0 8 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width="8" height="2" fill="#DFBA19" />
                  </svg>

                  <a
                    className="transition-all duration-300 text-xs TuskerGrotesk5500Medium inline-block leading-4 hover:text-[#DFBA19]"
                    href=""
                  >
                    ABOUT THE STEVIE AWARDS®
                  </a>
                </li>
                <li className="group/item leading-none flex items-center gap-[6px] hover:translate-x-2 transition-all duration-300">
                  <svg
                    className="flex-shrink-0 w-0 transition-all duration-300 group-hover/item:w-2"
                    height="3"
                    viewBox="0 0 8 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width="8" height="2" fill="#DFBA19" />
                  </svg>

                  <a
                    className="transition-all duration-300 text-xs TuskerGrotesk5500Medium inline-block leading-4 hover:text-[#DFBA19]"
                    href=""
                  >
                    STAFF
                  </a>
                </li>
                <li className="group/item leading-none flex items-center gap-[6px] hover:translate-x-2 transition-all duration-300">
                  <svg
                    className="flex-shrink-0 w-0 transition-all duration-300 group-hover/item:w-2"
                    height="3"
                    viewBox="0 0 8 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width="8" height="2" fill="#DFBA19" />
                  </svg>

                  <a
                    className="transition-all duration-300 text-xs TuskerGrotesk5500Medium inline-block leading-4 hover:text-[#DFBA19]"
                    href=""
                  >
                    CALENDAR
                  </a>
                </li>
                <li className="group/item leading-none flex items-center gap-[6px] hover:translate-x-2 transition-all duration-300">
                  <svg
                    className="flex-shrink-0 w-0 transition-all duration-300 group-hover/item:w-2"
                    height="3"
                    viewBox="0 0 8 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width="8" height="2" fill="#DFBA19" />
                  </svg>

                  <a
                    className="transition-all duration-300 text-xs TuskerGrotesk5500Medium inline-block leading-4 hover:text-[#DFBA19]"
                    href=""
                  >
                    STEVIE AWARDS UPDATE NEWSLETTER
                  </a>
                </li>
                <li className="group/item leading-none flex items-center gap-[6px] hover:translate-x-2 transition-all duration-300">
                  <svg
                    className="flex-shrink-0 w-0 transition-all duration-300 group-hover/item:w-2"
                    height="3"
                    viewBox="0 0 8 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width="8" height="2" fill="#DFBA19" />
                  </svg>

                  <a
                    className="transition-all duration-300 text-xs TuskerGrotesk5500Medium inline-block leading-4 hover:text-[#DFBA19]"
                    href=""
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href=""
                className="text-white group TuskerGrotesk5500Medium flex items-center gap-1 text-[12px]"
              >
                THE AWARDS
                <svg
                  className="group-hover:-rotate-180 transition duration-300"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primary"
                    d="M4.00391 6.78906L8.00391 10.7891L12.0039 6.78906"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white group TuskerGrotesk5500Medium flex items-center gap-1 text-[12px]"
              >
                ENTER
                <svg
                  className="group-hover:-rotate-180 transition duration-300"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primary"
                    d="M4.00391 6.78906L8.00391 10.7891L12.0039 6.78906"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white group TuskerGrotesk5500Medium flex items-center gap-1 text-[12px]"
              >
                JUDGES
                <svg
                  className="group-hover:-rotate-180 transition duration-300"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primary"
                    d="M4.00391 6.78906L8.00391 10.7891L12.0039 6.78906"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white group TuskerGrotesk5500Medium flex items-center gap-1 text-[12px]"
              >
                SPONSORS
                <svg
                  className="group-hover:-rotate-180 transition duration-300"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primary"
                    d="M4.00391 6.78906L8.00391 10.7891L12.0039 6.78906"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white group TuskerGrotesk5500Medium flex items-center gap-1 text-[12px]"
              >
                PRESS
                <svg
                  className="group-hover:-rotate-180 transition duration-300"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primary"
                    d="M4.00391 6.78906L8.00391 10.7891L12.0039 6.78906"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white group TuskerGrotesk5500Medium flex items-center gap-1 text-[12px] group"
              >
                TICKET
                <svg
                  className="group-hover:-rotate-180 transition duration-300"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primary"
                    d="M4.00391 6.78906L8.00391 10.7891L12.0039 6.78906"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white group TuskerGrotesk5500Medium flex items-center gap-1 text-[12px]"
              >
                STORES
                <svg
                  className="group-hover:-rotate-180 transition duration-300"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primary"
                    d="M4.00391 6.78906L8.00391 10.7891L12.0039 6.78906"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div className="gap-3 hidden lg:flex">
            <div 
              className="search-icon border flex-shrink-0 border-[#ffffff50] w-10 h-10 flex justify-center items-center cursor-pointer"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              <img src="/images/icons/search.svg" alt="search" />
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                id="langDropdownBtn"
                className="flex h-10 w-20 items-center justify-center border border-[#ffffff60] bg-maroon-500 hover:bg-maroon-700 text-white px-3 py-2 focus:outline-none text-sm font-heading"
              >
                <img
                  id="langFlag"
                  src="/images/icons/states-f.svg"
                  alt="Flag"
                  className="w-6 h-4 mr-2"
                />
                <span id="langCode">ENG</span>
              </button>

              <div
                id="langDropdown"
                className="absolute right-0 mt-2 w-40 bg-white z-10 shadow-md rounded-lg hidden"
              >
                <a
                  href="#"
                  data-lang="ENG"
                  data-flag="/images/icons/states-f.svg"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <img
                    src="/images/icons/states-f.svg"
                    alt="English Flag"
                    className="w-6 h-4 mr-2"
                  />
                  <span className="text-sm font-heading">English</span>
                </a>
                <a
                  href="#"
                  data-lang="FRA"
                  data-flag="/images/icons/france-f.svg"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <img
                    src="/images/icons/france-f.svg"
                    alt="French Flag"
                    className="w-6 h-4 mr-2"
                  />
                  <span className="text-sm font-heading">Français</span>
                </a>
                <a
                  href="#"
                  data-lang="ITA"
                  data-flag="/images/icons/taly-f.svg"
                  alt="Italian Flag"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <img
                    src="/images/icons/taly-f.svg"
                    alt="Italian Flag"
                    className="w-6 h-4 mr-2"
                  />
                  <span className="text-sm font-heading">Italiano</span>
                </a>
              </div>
            </div>
          </div>

          <button className="cursor-pointer toggler lg:hidden">
            <img src="/images/icons/toggler.svg" alt="menu toggle" />
          </button>
        </div>
      </div>

      <div ref={searchRef} className={`search-box absolute w-full  ${isSearchVisible ? 'block' : 'hidden'}`} style={{ top: '100%' }}>
        <div className="container">
          <div className="py-4">
            <form action="">
              <div className="relative" style={{ backdropFilter: "blur(5px)" }}>
                <input
                  type="text"
                  placeholder="Search our Websites"
                  className="bg-transparent outline-0 border-2 border-white  text-yellow-300 w-full placeholder:text-[#ffffff80] h-[54px] text-sm p-5 font-medium focus:border-primary transition-none"
                />
                <span className="absolute bg-primary min-w-16 bg-yellow-400 flex items-center justify-center top-[1px] right-[1px] bottom-[1px] cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9961 19C15.4144 19 18.9961 15.4183 18.9961 11C18.9961 6.58172 15.4144 3 10.9961 3C6.57781 3 2.99609 6.58172 2.99609 11C2.99609 15.4183 6.57781 19 10.9961 19Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.0023 20.9984L16.6523 16.6484"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-[#DFBA19] text-xs font-medium font-heading leading-4 mt-4">
                Search Past Winners/Finalists
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
