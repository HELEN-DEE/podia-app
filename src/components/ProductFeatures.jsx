import React from 'react';
import cartIcon from "../assets/digital_products-icon-cart.svg";
import loginIcon from "../assets/digital_products-icon-login.svg";
import uploadIcon from "../assets/digital_products-icon-upload.svg";


const Features = [
  {
    Icon: cartIcon,
    mainText: "Checkout and sales are handled for you",
    subText: "You don’t have to figure out a bunch of tools or website embeds. Just connect a payment provider and your Podia site takes care of payments for you."
  },
  {
    Icon: loginIcon,
    mainText: "Your customers log in, and your products are there for them",
    subText: "Your Podia site handles access to products for you. Everything is in one place. When your customers buy a product, they get a log in. After that, they can see all the products they’ve bought from you."
  },
  {
    Icon: uploadIcon,
    mainText: "Upload your product. Make your sales page. Done.",
    subText: "You could sell a digital product by this afternoon. Podia handles hosting, sales pages, checkout, and delivery. All you need is something to sell."
  }
]
const ProductFeatures = () => {
  return (
    <section className='lg:px-20 py-24'>
      <div className='px-8'>
        <h1 className='text-[2.9rem] text-center font-semibold font-[serif-font] py-4 leading-tight'>
          All you have to do is make the product. Podia takes care of the details for you.
        </h1>
        <p className='text-xl text-center leading-relaxed text-gray-500'>
          Podia lets you make your sales page, take payments, and give your customers access all in one place. Host and sell your products without needing to figure out a handful of new tools.
        </p>
      </div>
      <div className='lg:flex gap-12 pt-16'>
        {Features.map((item, index) => (
          <div key={index} className='space-y-3'>
            <div className='flex justify-center'>
              <img src={item.Icon} alt="icon-img" className=''/>
            </div>
            <h1 className='text-center font-[serif-font] font-medium text-[1.4rem]'>
              {item.mainText}
            </h1>
            <p className='text-center text-gray-500 text-sm leading-loose'>
              {item.subText}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductFeatures
