import React from 'react'

function Calltoaction() {
  return (
    <section className='py-18 md:py-20'>
      <div className='container '>
        <div className='relative px-4 py-32 overflow-hidden border border-white/20 rounded-xl'>
          <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]'></div>

          <div className='relative '>
            <h2 className='text-5xl tracking-tighter text-center md:px-48 lg:px-96 lg:text-6xl'>AI-Driven SEO for everyone.</h2>
            <p className='mt-3 text-lg font-semibold text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text md:px-32 md:mt-3 lg:px-96 lg:text-xl sm:px-8 '>Achive clear, impactfull results without the complexity.</p>
            <div className='flex justify-center'>
              <button className='absolute px-2 py-1.5 rounded-lg   font-semibold text-sm bg-gradient-to-b from-[#190d2e] to-[#361864] outline-none shadow-[0px_0px_8px_#8c45ff]  md:block lg:block mt-5'>
                <div className='absolute inset-0 '>
                  <div className='absolute inset-0 border rounded-lg border-white/15'></div>
                </div>
                <span>Join Waitlist</span></button>
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}

export default Calltoaction
