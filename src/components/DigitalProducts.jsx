import React from 'react'
import firstImg from "../assets/podia-img-1.jpeg"

const DigitalProducts = () => {
  return (
    <section className='lg:px-24 lg:pt-48 pb-5 pt-36 px-4'>
      
      <div className='grid lg:grid-cols-2 gap-14'>
        <div className='lg:order-2 flex items-center'>
          <img src={firstImg} alt="img-1" className='rounded-lg'/>
        </div>
        <div className='lg:order-1 grid gap-y-4'>
          <h1 className='uppercase text-sm text-gray-500'>
            Digital products
          </h1>
          <h2 className='text-5xl font-semibold leading-tight font-[serif-font]'>
          Sell online courses, coaching sessions, webinars, workshops, ebooks, and anything you can think of on Podia
          </h2>
          <p className='text-[1.3rem] leading-9 text-gray-500'>
          Get everything you need in one place that you own. Podia takes care of hosting products, taking payments, and getting products to your customers. And you always control your own work.
          </p>
          <button className='bg-[#4b2aad] px-6 py-3.5 rounded-full w-[70%] text-white text-xl font-bold hover:bg-[#402a80] transition ease-in-out duration-200'>
            Get your free account
          </button>
        </div>
      </div>
    </section>
  )
}

export default DigitalProducts
