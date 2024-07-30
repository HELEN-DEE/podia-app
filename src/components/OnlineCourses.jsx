import React from 'react'
import secondImg from "../assets/podia-img-2.jpeg";
import { FaArrowRight } from "react-icons/fa6";
import Star from "./Star"


const OnlineCourses = () => {
  return (
    <section className='lg:px-24 lg:py-6'>
      <h1 className='text-center text-4xl font-[serif-font] font-semibold'>
        What kinds of products can you sell with Podia?
      </h1>
      <p className='text-center text-xl py-3 leading-relaxed text-gray-500'>
        Podia gives you the flexibility to sell whatever you want. That means you have more ways to grow your creator business.
      </p>

      <div className='grid lg:grid-cols-2 gap-16 py-16 '>
        <div className='flex justify-center lg:order-2 pb-6'>
          <img src={secondImg} alt="img-2" className='rounded-lg'/>
        </div>
        <div className='lg:order-1 grid place-content-center gap-2'>
          <h1 className='uppercase text-gray-500 text-sm'>
            Online courses
          </h1>
          <h2 className='font-[serif-font] text-4xl font-semibold leading-snug'>
            Beautiful online courses you can build in moments
          </h2>
          <p className='text-gray-500 leading-relaxed text-xl'>
            Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you.
          </p>
          <button className='flex items-center gap-2 text-[#4b2aad] font-medium text-lg py-4'>
            Learn more about courses
            <span className=''>
              <FaArrowRight  />
            </span>
          </button>
        </div>
      </div>

      <Star/>

      <div className=' px-10 space-y-3 pb-8'>
      <h1 className='text-center font-[serif-font] text-2xl px-6 leading-relaxed'>
          I’ve wanted to offer e-courses for a while but always felt overwhelmed with how to set it up. Podia has made it super easy.
        </h1>
        <p className='text-center text-lg text-gray-500'>
          — Joy Cho, Oh Joy! Academy
        </p>
      </div>
    </section>
  )
}

export default OnlineCourses
