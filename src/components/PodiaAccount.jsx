import React from 'react'

const PodiaAccount = () => {
  return (
    <section className='lg:px-24 px-4 pb-24'>
      <div className='bg-[#201445] text-white flex flex-col justify-center items-center py-16 gap-4 rounded-lg'>
        <h1 className='text-4xl font-bold text-center font-[serif-font]'>
          Get your free Podia account
        </h1>
        <p className='text-[#e3def3] lg:text-lg px-6 lg:px-0 '>
          Join the 150,000+ creators who use Podia to create websites, sell digital products, and build online communities.
        </p>
        <button className='bg-[#9484c6] px-5 py-2 rounded-full text-lg font-semibold my-2 hover:bg-[#4b2aad] transition ease-in-out duration-200' >
          Sign up free
        </button>
      </div>
    </section>
  )
}

export default PodiaAccount
