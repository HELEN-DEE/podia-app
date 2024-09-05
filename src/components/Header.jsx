import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/podia-logo.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";



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
        { label: "Creator stories", path: "/creator-stories" },
        { label: "Hire a Podia Pro", path: "/hire-a-podia-pro" },
        { label: "Podia creator community", path: "/podia-creator-community" },
        { label: "Podia demo site", path: "/podia-demo-site" },
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
  // Active hover effect if a navLink has been selected
  const [hoverActive, setHoverActive] = useState(null)
// State to track if the Menu has been clicked on 
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  useEffect(() => {
    // Function to close dropdown when clicking outside
    const handleClickOutside = (event) => {
      // Check if dropdownRef is defined and the clicked target is outside the dropdown element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        
        // If true, deactivate the active hover effect by setting it to null
        setHoverActive(null);
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

  // Function to toggle dropdown visibility and hover active state
  const handleDropdown = (index) => {
    // console.log(activeDropdown);
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
      
    }
    // setActiveDropdown(activeDropdown === index ? null : index);
    setHoverActive(hoverActive === index ? null : index);
  };

  // Function to Toggle the value when the menu is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if(isMenuOpen) {
      setActiveDropdown(null);
      setHoverActive(null);
    }
  };

  return (
    <header
      className={`lg:px-24 py-4 px-4 flex items-center justify-between  bg-[#fdfbf9] fixed w-full transition-shadow duration-300 ${
        isScrolled ? "shadow-lg bg-[#ffffff]" : ""
      }`}
    >
      <div className="flex gap-8">
        {/* Logo */}
        <img src={logo} alt="logo-img" className="w-20" />

        {/* Navigation menu */}
        <nav className="flex gap-2 items-center" ref={dropdownRef}>
          {navLinks.map((item, index) => (
            <div key={index} className="">
              <ul className="">
                {/* Navigation item */}
                <li
                  className={`text-lg lg:flex cursor-pointer items-center hidden hover:bg-[#f5efeb] hover:rounded-full transition-transform duration-200 ease-in-out px-3 py-2 text-gray-700 ${
                    hoverActive === index ? "bg-[#f5efeb] rounded-full border-4 border-[#9484c65e]" : ""
                  }`}
                  onClick={() => handleDropdown(index)}
                >

                  {item.label}
                  {/* Dropdown arrow for items with nested links */}
                  {item.nestedLinks && (
                    <span>
                      <RiArrowDownSLine size={22}/>
                    </span>
                  )}
                </li>

                {/* Dropdown menu */}
                {activeDropdown === index && item.nestedLinks && (
                  <div className="bg-white p-4 shadow-lg rounded-lg absolute mt-2">
                    {item.label === "Resources" ? (
                      // Special layout for Resources dropdown
                      <div className="w-[400px]">
                        <h2 className="font-semibold text-[#918277] mb-4 px-2 text-[13px]">
                          FREE RESOURCES
                        </h2>
                        <div className="grid grid-cols-2 gap-y-2 px-2 mb-8 ">
                          {Object.values(item.nestedLinks)[0].map(
                            (nestedLink, j) => (
                              <a
                                key={j}
                                href={nestedLink.path}
                                className="hover:text-[#4b2aad] transition-transform duration-200 ease-in-out text-[#5e5b58] "
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
                              <h2 className="font-semibold text-[#918277] uppercase text-[13px] tracking-widest ">{key}</h2>
                              {item.nestedLinks[key].map((nestedLink, j) => (
                                <a
                                  key={j}
                                  href={nestedLink.path}
                                  className="block py-2 hover:text-[#4b2aad] transition-transform duration-200 ease-in-out text-[#5e5b58] "
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
      <div className="gap-1 flex">
        <button className="text-lg px-5 py-3 hover:bg-[#f5efeb] hover:rounded-full transition-transform duration-200 ease-in-out">
          Login
        </button>

         {/* Menu Button for Mobile View */}
        <button className="flex lg:hidden text-lg py-3 hover:bg-[#f5efeb] hover:rounded-full transition-transform duration-200 ease-in-out items-center" onClick={toggleMenu}>
          Menu
          <RiArrowDownSLine /> 
        </button>
          {/* Conditionally render navlinks when menu is open */}
          {isMenuOpen && (
          <nav className="lg:hidden absolute bg-[#ffffff] left-0 right-0 w-[97%] mx-auto top-2 z-10 px-4 shadow-lg border rounded-lg overflow-y-auto max-h-[95vh] scrollbar-hide">
            <p className="text-[12px] uppercase px-3 flex justify-between pt-8 text-[#c08d6e]">
              Menu
              {/* close menu button */}
              <span 
        onClick={() => {
          setIsMenuOpen(false);
          setActiveDropdown(null); // Reset activeDropdown when the menu is closed
          setHoverActive(null); // Reset hoverActive
        }}
      >
        <IoIosClose size={30} className="text-[#4b2aad]"/>
      </span>
            </p>
            {navLinks.map((item, index) => (
              <div key={index} className="py-1">
        <ul className="">
          {/* Navigation item */}
          <li
  className={`text-2xl relative cursor-pointer items-center py-2 transition-transform duration-200 ease-in-out px-3 text-[#000000] font-medium flex font-[san-serif]`}
  onClick={() => handleDropdown(index)}
  onMouseEnter={() => setHoverActive(index)}
  onMouseLeave={() => setHoverActive(null)}
>
  <span className="w-full flex items-center justify-between">
    {item.label}
    {/* Dropdown arrow for items with nested links */}
    {item.nestedLinks && (
      <span
        className={`ml-2 transition-transform duration-200 ${
          activeDropdown === index ? 'rotate-180' : 'rotate-0'
        }`}
      >
        <RiArrowDownSLine size={22} />
      </span>
    )}
  </span>
</li>


          {/* Dropdown menu */}
          {activeDropdown === index && item.nestedLinks && (
            <div className="bg-white p-4 rounded-lg mt-2">
              {item.label === "Resources" ? (
                // Special layout for Resources dropdown
                <div className="w-[400px]">
                  <h2 className="font-semibold text-[#918277] mb-4 px-2 text-[13px]">
                    FREE RESOURCES
                  </h2>
                  <div className="grid gap-y-2 px-2 mb-8">
                    {Object.values(item.nestedLinks)[0].map(
                      (nestedLink, j) => (
                        <a
                          key={j}
                          href={nestedLink.path}
                          className="hover:text-[#4b2aad] transition-transform duration-200 ease-in-out text-[#5e5b58] block"
                        >
                          {nestedLink.label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              ) : (
                // Original layout for other dropdowns
                <div className="flex flex-col">
                  {Object.keys(item.nestedLinks).map((key, i) => (
                    <React.Fragment key={i}>
                      <div className="py-2">
                        <h2 className="font-semibold text-[#918277] uppercase text-[13px] tracking-widest">
                          {key}
                        </h2>
                        {item.nestedLinks[key].map((nestedLink, j) => (
                          <a
                            key={j}
                            href={nestedLink.path}
                            className="block py-2 hover:text-[#4b2aad] transition-transform duration-200 ease-in-out text-[#5e5b58]"
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

            {/* Sign up free button for mobile view */}
            <button className="bg-[#4b2aad] text-white w-[90%] px-6 py-2 my-4 rounded-full text-lg font-bold hover:bg-[#402a80] transition ease-in-out duration-200 flex justify-center mx-auto">
              Sign up free
            </button>
          </nav>
        )}
        <button className="bg-[#4b2aad] text-white px-6 py-2.5 rounded-full text-lg font-bold hover:bg-[#402a80] hidden lg:flex transition ease-in-out duration-200">
          Sign up free
        </button>
      </div>
    </header>
  )
};

export default Header;
