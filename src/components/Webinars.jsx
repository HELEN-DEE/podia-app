import React from 'react'
import fifthImg from "../assets/podia-img-5.jpeg"
import { FaArrowRight } from "react-icons/fa6";

const Webinars = () => {
  return (
    <section className='lg:px-24 px-4'>
      <div className='grid lg:grid-cols-2 py-24 gap-16'>
        <div className='lg:order-2 pb-4'>
          <img src={fifthImg} alt="img-5" className='rounded-lg'/>
        </div>
        <div className='lg:order-1 grid lg:place-content-center space-y-2'>
          <h1 className='uppercase text-gray-500 text-sm'>
            Webinars
          </h1>
          <h2 className='font-[serif-font] lg:text-4xl text-2xl font-semibold leading-snug'>
            Webinars and workshops with registration and payment in one place
          </h2>
          <p className='text-gray-500 leading-relaxed text-lg'>
            How can you charge for your webinars and workshops? Do it from your Podia site. Set up a paid webinar product and your customers can register straight from your website.
          </p>
          <button className='flex items-center gap-2 text-[#4b2aad] font-semibold text-lg py-4 group hover:text-[#402a80]'>
              Learn more about webinars
            <span className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Webinars
