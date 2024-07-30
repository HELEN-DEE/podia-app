import React from 'react';

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

const Footer = () => {
  return (
    <footer className='lg:px-24 bg-[#f5efeb] py-12 '>
      <div className=''>
        {FooterLinks.map((item, index) => (
          <div key={index} className='flex items-center gap-8 mb-4'>
            <h1 className='font-bold text-lg'>{item.Label}</h1>
            <ul className='flex items-center gap-4'>
              {item.nestedLinks.map((nestedItem, nestedIndex) => (
                <li key={nestedIndex} className='underline hover:!text-[#4b2aad]'>
                  <a href={nestedItem.path} className='text-gray-500' >
                    {nestedItem.Link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
