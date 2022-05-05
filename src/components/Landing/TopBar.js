import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import logo from "../../assets/logo.png";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="relative">
        <div className="h-14 flex items-center lg:block">
          <div className="lg:grid lg:grid-cols-2 flex-1">
            <div className="bg-[#F4F5FE] pl-5 lg:pl-10 py-3">
              <img
                src={logo}
                className="mt-4 md:mt-0 w-40"
                alt="Ezcolab-logo"
              />
            </div>
            <div className="bg-[#6D83E8] hidden lg:flex items-center justify-end lg:pr-10 py-3">
              <p className="text-[#6D83E8] bg-white p-2 inline rounded-lg">
                Sign Up
              </p>
            </div>
          </div>

          <div className=" flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 ring-2 ring-black mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none absolute top-3 right-0 "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className=" pt-10 pb-5 space-y-1 lg:px-3 text-center"
            >
              <div className="lg:bg-[#6D83E8] lg:flex lg:items-center lg:justify-end lg:pr-10 pr-0 lg:py-3">
                <p className="text-[#6D83E8] bg-white p-2 inline rounded-lg border-2 border-[#6D83E8] lg:border-0">
                  Sign Up
                </p>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default TopBar;
