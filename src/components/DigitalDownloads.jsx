import React from 'react'
import thirdImg from "../assets/podia-img-3.jpeg"
import Star from "./Star"
import { FaArrowRight } from "react-icons/fa6";

const DigitalDownloads = () => {
  return (
    <section className='lg:px-24 '>
      <div className=' grid lg:grid-cols-2 py-24 gap-16'>
      <div className='lg:order-2'>
        <img src={thirdImg} alt="img-3" className='rounded-lg'/>
      </div>
      <div className='lg:order-1 grid lg:place-content-center space-y-2 '>
        <h1 className='uppercase text-gray-500 text-sm'>
        Digital downloads
        </h1>
        <h2 className='font-[serif-font] text-4xl font-semibold leading-snug'>
          Ebooks, templates, and any file type you can think of
        </h2>
        <p className='text-gray-500 leading-relaxed text-lg'>
          Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type.
        </p>
        <button className='flex items-center gap-2 text-[#4b2aad] font-semibold text-lg py-4 group hover:text-[#402a80]'>
              Learn more about downloads
            <span className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
              <FaArrowRight />
            </span>
          </button>
      </div>

  
    </div>
      <Star/>

      <div className='px-10 space-y-3 pb-8 '>
        <h1 className='text-center font-[serif-font] text-2xl px-6 leading-relaxed'>
          We didn’t have to stress about technical details or custom coding. Using Podia made selling our first eBook quick, efficient, and fun.
        </h1>
        <p className='text-center text-lg text-gray-500'>
          — Matt & Steph, Plant-based food bloggers
        </p>
      </div>
    </section>
  )
}

export default DigitalDownloads
