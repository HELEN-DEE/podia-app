import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/podia-logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";



// Array of navigation links with nested dropdown menus
const navLinks = [
  {
    label: "Website",
    nestedLinks: {
      Platform: [
        { label: "Website builder", path: "/website-builder" },
        { label: "Website examples", path: "/website-examples" },
        { label: "Landing page examples", path: "/landing-page-examples" },
        { label: "Blogging examples", path: "/blogging-examples" },
      ],
      Features: [
        { label: "Blogging", path: "/blogging" },
        { label: "Landing pages", path: "/landing-pages" },
        { label: "Link in bio pages", path: "/link-in-bio-pages" },
        { label: "Portfolio websites", path: "/portfolio-websites" },
        { label: "Integrations", path: "/integrations" },
      ],
    },
  },
  {
    label: "Email",
    nestedLinks: {
      Platform: [
        { label: "Email marketing", path: "/email-marketing" },
        { label: "Email examples", path: "/email-examples" },
      ],
      Features: [
        { label: "Email templates", path: "/email-templates" },
        { label: "Email designer", path: "/email-designer" },
        { label: "Email forms", path: "/email-forms" },
        { label: "Email analytics", path: "/email-analytics" },
        { label: "Newsletters", path: "/newsletters" },
        { label: "Automations", path: "/automations" },
        { label: "Segmentation", path: "/segmentation" },
      ],
    },
  },
  {
    label: "Sell",
    nestedLinks: {
      Platform: [
        { label: "Online courses", path: "/online-courses" },
        { label: "Online course examples", path: "/online-course-examples" },
        { label: "Digital downloads", path: "/digital-downloads" },
        { label: "Checkout", path: "/checkout" },
      ],
      Features: [
        { label: "Multimedia products", path: "/multimedia-products" },
        { label: "Presell products", path: "/presell-products" },
        { label: "Upsells", path: "/upsells" },
        { label: "Coaching", path: "/coaching" },
        { label: "Webinars", path: "/webinars" },
        { label: "Affiliates", path: "/affiliates" },
      ],
    },
  },
  { label: "Pricing", path: "/pricing" },
  {
    label: "Resources",
    nestedLinks: {
      FreeResources: [
        { label: "Resource center", path: "/resource-center" },
        { label: "Hire a Podia Pro", path: "/hire-a-podia-pro" },
        { label: "Podia demo site", path: "/podia-demo-site" },
        { label: "Creator stories", path: "/creator-stories" },
        { label: "Podia creator community", path: "/podia-creator-community" },
        { label: "Help center", path: "/help-center" },
      ],
    },
  },
];

const Header = () => {
  // State to manage which dropdown is currently active
  const [activeDropdown, setActiveDropdown] = useState(null);
  // State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // Ref for the dropdown container to detect clicks outside
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to close dropdown when clicking outside
    const handleClickOutside = (event) => {
      // Check if dropdownRef is defined and the clicked target is outside the dropdown element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // If true, deactivate the dropdown by setting it to null
        setActiveDropdown(null);
      }
    };

    // Function to detect scroll and update header style
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle dropdown visibility
  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      className={`lg:px-24 py-4 flex items-center justify-between space-x-48 bg-[#fdfbf9] fixed w-full transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="flex gap-8">
        {/* Logo */}
        <img src={logo} alt="logo-img" className="w-20" />

        {/* Navigation menu */}
        <nav className="flex gap-5 items-center" ref={dropdownRef}>
          {navLinks.map((item, index) => (
            <div key={index} className="">
              <ul className="">
                {/* Navigation item */}
                <li
                  className="text-xl flex cursor-pointer items-center"
                  onClick={() => handleDropdown(index)}
                >
                  {item.label}
                  {/* Dropdown arrow for items with nested links */}
                  {item.nestedLinks && (
                    <span>
                      <RiArrowDropDownLine size={25} />
                    </span>
                  )}
                </li>

                {/* Dropdown menu */}
                {activeDropdown === index && item.nestedLinks && (
                  <div className="bg-white p-4 shadow-lg rounded-lg absolute mt-2">
                    {item.label === "Resources" ? (
                      // Special layout for Resources dropdown
                      <div className="w-[400px]">
                        <h2 className="font-semibold text-gray-500 mb-4 px-2">
                          FREE RESOURCES
                        </h2>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 px-2">
                          {Object.values(item.nestedLinks)[0].map(
                            (nestedLink, j) => (
                              <a
                                key={j}
                                href={nestedLink.path}
                                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                              >
                                {nestedLink.label}
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    ) : (
                      // Original layout for other dropdowns
                      <div className="flex gap-5">
                        {Object.keys(item.nestedLinks).map((key, i) => (
                          <React.Fragment key={i}>
                            <div className="py-2">
                              <h2 className="font-bold">{key}</h2>
                              {item.nestedLinks[key].map((nestedLink, j) => (
                                <a
                                  key={j}
                                  href={nestedLink.path}
                                  className="block py-2 hover:underline transition-transform duration-200 ease-in-out"
                                >
                                  {nestedLink.label}
                                </a>
                              ))}
                            </div>
                            {i < Object.keys(item.nestedLinks).length - 1 && (
                              <div className="w-px bg-gray-200 mx-4 my-5" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Login and Sign up buttons */}
      <div className="space-x-4">
        <button className="text-lg px-5 py-3 hover:bg-[#f5efeb] hover:rounded-full transition-transform duration-200 ease-in-out">
          Login
        </button>
        <button className="bg-[#4b2aad] text-white px-6 py-2.5 rounded-full text-lg font-bold hover:bg-[#402a80]">
          Sign up free
        </button>
      </div>
    </header>
  );
};

export default Header;
