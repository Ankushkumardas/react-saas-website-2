import React from 'react'
import twitter from '../assets/twitter.avif'
import insta from '../assets/insta.jpeg'
import github from '../assets/github.png'
function Footer() {
  return (
    <section className='py-10 mt-10 border-t border-white/20'>
      <div className='container '>
        <div className='flex flex-col items-center lg:flex-row lg:gap-20'>
          <div className='text-center'>
            <div className='py-1 mx-auto text-xl font-semibold tracking-tighter text-transparent border border-white/20 rounded-xl bg-gradient-to-r from-white to-purple-500 bg-clip-text md:mx-40 lg:px-10'>AI StartUp Landing Page.</div>
          </div>
          <div>
            <nav className='flex flex-col gap-3 my-6 lg:flex-row'>
              <a href="#" className='transition text-white/50 hover:text-white '>Features </a>
              <a href="#" className='transition text-white/50 hover:text-white '>Developers</a>
              <a href="#" className='transition text-white/50 hover:text-white '>Company</a>
              <a href="#" className='transition text-white/50 hover:text-white '>Blog</a>
              <a href="#" className='transition text-white/50 hover:text-white '>Changelog</a>
            </nav>
          </div>
          <div className='flex gap-5'>
            <img src={twitter} alt="" className='w-auto h-8 text-white/50 hover:text-white'/>
            <img src={insta} alt="" className='w-auto h-8 text-white/50 hover:text-white'/>
            <img src={github} alt="csac" className='w-auto h-8 text-white/50 hover:text-white'/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
