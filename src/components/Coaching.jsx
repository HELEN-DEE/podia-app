import React from 'react'
import fourthImg from "../assets/podia-img-4.jpeg"
import { FaArrowRight } from "react-icons/fa6";
import Star from "./Star"

const Coaching = () => {
  return (
    <section className='lg:px-24 px-4'>
      <div className='grid lg:grid-cols-2 py-24 gap-16'>
        <div className='lg:order-2'>
          <img src={fourthImg} alt="img-4" className='rounded-lg'/>
        </div>
        <div className='lg:order-1 grid lg:place-content-center space-y-2'>
          <h1 className='uppercase text-gray-500 text-sm'>
            Coaching
          </h1>
          <h2 className='font-[serif-font] text-[2rem] font-semibold leading-snug'>
            One-on-one coaching and consultations, with billing managed for you
          </h2>
          <p className='text-gray-500 leading-relaxed text-lg'>
            Sometimes your students want one-on-one attention. Podia makes it easy for you to charge for coaching sessions and consultations.
          </p>
          <button className='flex items-center gap-2 text-[#4b2aad] font-semibold text-lg py-4 group hover:text-[#402a80]'>
              Learn more about coaching
            <span className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      <Star/>

      <div className='px-10 space-y-3 pb-8 '>
        <h1 className='text-center font-[serif-font] text-2xl px-6 leading-relaxed'>
          Podia just works. It’s easy to use and includes everything you need to sell digital products. I’ve tried all the alternatives, and Podia is hard to beat.
        </h1>
        <p className='text-center text-lg text-gray-500'>
          — Shawn Leamon, Divorce and Your Money
        </p>
      </div>
    </section>
  )
}

export default Coaching
