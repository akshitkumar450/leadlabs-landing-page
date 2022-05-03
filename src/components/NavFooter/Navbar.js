import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../assets/logo.png";
import Btn from "../Btn";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleTransition = () => {
    if (window.scrollY > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTransition);
    return () => {
      window.removeEventListener("scroll", handleTransition);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div>
      <nav
        className={`bg-white lg:bg-transparent p-2 fixed top-0 z-10 w-full ${
          show && "!bg-white transition-all duration-100"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="h-14 mb-2">
            <div className="md:mt-3 flex items-center">
              <div className="flex-shrink-0 cursor-pointer">
                <Link to="/">
                  <img
                    src={logo}
                    className="mt-4 md:mt-0 w-40 pb-3 lg:py-3"
                    alt="Ezcolab-logo"
                  />
                </Link>
              </div>
              <div className="hidden md:flex items-center ">
                <div className="ml-3 flex flex-1 items-center">
                  {location.pathname === "/" && (
                    <React.Fragment>
                      <a href="#home" className="navbar__big">
                        Home
                      </a>
                      <a href="#features" className="navbar__big">
                        Features
                      </a>
                      <a href="#pricing" className="navbar__big">
                        Pricing
                      </a>
                    </React.Fragment>
                  )}

                  {(location.pathname === "/usecase" ||
                    location.pathname === "/ltd" ||
                    location.pathname === "/examples") && (
                    <Link to="/" className="navbar__big">
                      Home
                    </Link>
                  )}

                  <Link to="/usecase" className="navbar__big">
                    Use Cases
                  </Link>
                  <Link to="/ltd" className="navbar__big">
                    LTD
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-end">
                <button className="navbar__big">Create</button>
                <div>
                  <a
                    href="https://leadlabs.ezcolab.com"
                    target="_blank"
                    rel="noreferrer"
                    className="navbar__big "
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
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
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center"
              >
                {location.pathname === "/" && (
                  <React.Fragment>
                    <a href="#home" className="navbar__big">
                      Home
                    </a>
                    <a href="#features" className="navbar__big">
                      Features
                    </a>
                    <a href="#pricing" className="navbar__big">
                      Pricing
                    </a>
                  </React.Fragment>
                )}

                {(location.pathname === "/usecase" ||
                  location.pathname === "/ltd" ||
                  location.pathname === "/examples") && (
                  <Link to="/" className="navbar__small">
                    Home
                  </Link>
                )}

                <Link to="/usecase" className="navbar__small">
                  Use Cases
                </Link>
                <Link to="/ltd" className="navbar__small">
                  LTD
                </Link>
                <Link to="/examples" className="navbar__small">
                  Examples
                </Link>

                <Btn nav href="https://leadlabs.ezcolab.com/signup/free">
                  <p className="navbar__small">Sign Up</p>
                </Btn>

                <a
                  href="https://leadlabs.ezcolab.com"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar__small"
                >
                  Sign In
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
