import React, {useState} from 'react';
import { RiArrowDownSLine } from "react-icons/ri";

const FooterLinks = [
  {
    Label: "Platform",
    nestedLinks: [
      { Link: "Pricing", path: "/Pricing" },
      { Link: "Sign up free", path: "/signUp" },
      { Link: "Community", path: "/Community" },
      { Link: "Website builder", path: "/Websitebuilder" },
      { Link: "Digital products", path: "/digitalProducts" },
      { Link: "Email marketing", path: "/emailMarketing" },
    ],
  },
  {
    Label: "Support",
    nestedLinks: [
      { Link: "Contact us", path: "/contactUs" },
      { Link: "Help center", path: "/helpCenter" },
      { Link: "Hire a Podia pro", path: "/podiaPro" },
      { Link: "Creator community", path: "/Creatorcommunity" },
      { Link: "Podia 101", path: "/Podia101" },
    ],
  },
  {
    Label: "Features",
    nestedLinks: [
      { Link: "Online courses", path: "/onlineCourses" },
      { Link: "Downloads", path: "/Downloads" },
      { Link: "Webinars", path: "/webinars" },
      { Link: "Coaching", path: "/coaching" },
      { Link: "All features", path: "/features" },
    ],
  },
  {
    Label: "Compare",
    nestedLinks: [
      { Link: "Kajabi", path: "/kajabi" },
      { Link: "Teachable", path: "/Teachable" },
      { Link: "Thinkific", path: "/Thinkific" },
      { Link: "Patreon", path: "/Patreon" },
      { Link: "Gumroad", path: "/Gumroad" },
      { Link: "Podia alternatives", path: "/alternatives" },
    ],
  },
  {
    Label: "Resources",
    nestedLinks: [
      { Link: "Examples", path: "/Examples" },
      { Link: "Demo", path: "/demo" },
      { Link: "Creator stories", path: "/stories" },
      { Link: "Blog", path: "/blog" },
      { Link: "Free tools", path: "/tools" },
      { Link: "All resources", path: "/resources" },
    ],
  },
  {
    Label: "Podia",
    nestedLinks: [
      { Link: "Jobs", path: "/jobs" },
      { Link: "About", path: "/About" },
      { Link: "Branding", path: "/branding" },
      { Link: "Reviews", path: "/reviews" },
      { Link: "Refer-a-creator", path: "/refer" },
      { Link: "Affiliates", path: "/Affiliates" },
    ],
  },
  {
    Label: "Social",
    nestedLinks: [
      { Link: "Twitter", path: "/Twitter" },
      { Link: "Facebook", path: "/Facebook" },
      { Link: "Instagram", path: "/Instagram" },
      { Link: "YouTube", path: "/Youtube" },
    ],
  },
];

const copyrightLinks = [
  {Link: "Terms", path: "/Terms"},
  {Link: "Privacy", path:"Privacy"}
]

const Footer = () => {
  // to track if dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  }
  return (
    <footer className='lg:px-24 bg-[#f5efeb] lg:py-28 py-16 px-4'>
      <div className=''>
        {FooterLinks.map((item, index) => (
          <div key={index} className='lg:flex lg:items-center lg:gap-8 mb-4' >
            <div className='flex lg:items-center justify-between  cursor-pointer' onClick={() => toggleDropdown(index)}>
            <h1 className='font-bold text-lg'>
              {item.Label}
            </h1>
            <RiArrowDownSLine className = {`transform transition-transform duration-300 lg:hidden ${
              openDropdown === index ? 'rotate-180' : ''
              }`}/>
            </div>
          <ul className = {`mt-2 ${
            openDropdown ===index ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:gap-4`
          }>
              {item.nestedLinks.map((nestedItem, nestedIndex) => (
                <li key={nestedIndex} className='underline text-lg'>
                  <a href={nestedItem.path} className='text-gray-600 hover:text-[#4b2aad]' >
                    {nestedItem.Link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex gap-3 text-gray-600 text-sm pt-8'>
        <p>Podia Labs, Inc. © 2024</p>
        {copyrightLinks.map((item, index) => (
          <div key={index} className=''>
            <a href={item.path} className='underline hover:text-[#4b2aad]'>
              {item.Link}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
