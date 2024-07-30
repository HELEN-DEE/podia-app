import React from 'react';
import logo from "../assets/podia-logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

const navLinks = [
  {
    Label: "Website",
    nestedFirstLinks: [
      { Label: "Platform" },
      { Link: "Website builder", path: '/web-build' },
      { Link: "Website examples", path: '/web-example' },
      { Link: "Landing page examples", path: '/page-example' },
      { Link: "Blogging examples", path: '/blog-example' }
    ],
    nestedSecondLinks: [
      { Label: "Features" },
      { Link: "Blogging", path: '/blog' },
      { Link: "Landing pages", path: '/landing-page' },
      { Link: "Link in bio pages", path: '/bio-page' },
      { Link: "Portfolio websites", path: '/portfolio-websites' },
      { Link: "Integrations", path: '/integration' }
    ]
  },
  {
    Label: "Email",
    nestedFirstLinks: [
      { Label: "Platform" },
      { Link: "Email marketing", path: '/email-marketing' },
      { Link: "Email examples", path: '/email-examples' }
    ],
    nestedSecondLinks: [
      { Label: "Features" },
      { Link: "Email templates", path: '/templates' },
      { Link: "Email designer", path: '/designer' },
      { Link: "Email forms", path: '/forms' },
      { Link: "Email analytics", path: '/analytics' },
      { Link: "Newsletters", path: '/newsletter' },
      { Link: "Automations", path: '/automation' },
      { Link: "Segmentation", path: '/segmentation' }
    ]
  },
  {
    Label: "Sell",
    nestedFirstLinks: [
      { Label: "Platform" },
      { Link: "Online courses", path: '/online-courses' },
      { Link: "Online course examples", path: '/examples' },
      { Link: "Digital downloads", path: '/downloads' },
      { Link: "Checkout", path: '/checkout' }
    ],
    nestedSecondLinks: [
      { Label: "Features" },
      { Link: "Multimedia products", path: '/multimedia-products' },
      { Link: "Presell products", path: '/Presell-products' },
      { Link: "Upsells", path: '/upsells' },
      { Link: "Coaching", path: '/coaching' },
      { Link: "Webinars", path: '/Webinars' },
      { Link: "Affiliates", path: '/Affiliates' }
    ]
  },
  { Label: "Pricing" },
  {
    Label: "Resources",
    nestedFirstLinks: [
      { Label: "Free resources" },
      { Link: "Resource center", path: '/resource-center' },
      { Link: "Hire a Podia Pro", path: '/podia-pro' },
      { Link: "Podia demo site", path: '/demo-site' }
    ],
    nestedSecondLinks: [
      { Link: "Creator stories", path: '/creator-stories' },
      { Link: "Podia Creator Community", path: '/creator-community' },
      { Link: "Help center", path: '/Help-center' }
    ]
  }
];

const Header = () => {
  return (
    <header className='lg:px-24 py-4 flex space-x-48 bg-[#fdfbf9] fixed '>
      <div className='flex gap-8'>
        <img src={logo} alt="logo-img" className='w-20'/>
        <nav className='flex gap-5 items-center'>
          {navLinks.map((item, index) => (
            <div key={index} className=''>
              <ul className=''>
                <li className='text-xl flex items-center'>
                  {item.Label} 
                  {item.nestedFirstLinks || item.nestedSecondLinks ? <span><RiArrowDropDownLine size={25} /></span> : null}
                </li>
                <div className=''>
                  {item.nestedFirstLinks && item.nestedFirstLinks.map((firstLink, firstIndex) => (
                    <li key={firstIndex} className='hidden'>
                      {firstLink.Label && <h2>{firstLink.Label}</h2>}
                      {firstLink.Link && <a href={firstLink.path}>{firstLink.Link}</a>}
                    </li>
                  ))}
                  {item.nestedSecondLinks && item.nestedSecondLinks.map((secondLink, secondIndex) => (
                    <li key={secondIndex} className='hidden'>
                      {secondLink.Link && <a href={secondLink.path}>{secondLink.Link}</a>}
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className='space-x-4'>
        <button className='text-lg px-5 py-3 hover:bg-[#f5efeb] hover:rounded-full transition-transform duration-200 ease-in-out'>
          Login
        </button>
        <button className='bg-[#4b2aad] text-white px-6 py-2.5 rounded-full text-lg font-bold hover:bg-[#402a80]'>
          Sign up free
        </button>
      </div>
    </header>
  );
};

export default Header;

