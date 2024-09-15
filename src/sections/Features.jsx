import React from 'react'
import { MdDryCleaning } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { SlOrganization } from "react-icons/sl";
import prodimage from '../assets/ad.png'
const Features = () => {

  const tabs = [
    {
      icon: <MdDryCleaning />,
      title: 'User-friendly Dashboard',
      isnew: false,
      backgroundpositionx: 0,
      backgroundpositiony: 0,
      backgroundsize: 150,
    },
    {
      icon: <MdOutlineCleaningServices />,
      title: 'One-Click Optimization',
      isnew: false,
      backgroundpositionx: 96,
      backgroundpositiony: 100,
      backgroundsize: 177,
    },
    {
      icon: <SlOrganization />,
      title: 'Smart-Key generation',
      isnew: true,
      backgroundpositionx: 100,
      backgroundpositiony: 27,
      backgroundsize: 177,
    },
  ]
  return (
    <section className='py-20 lg:py-16 ' id='features'>
      <div className='container '>
        <h2 className='text-6xl tracking-tighter text-center lg:text-6xl'>Elevate your SEO efforts.</h2>
        <p className='text-lg font-semibold text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text md:px-20 md:mt-3 lg:px-72 lg:text-xl'>From small startups to large enterprises, our AI- driven tool has revolutuionazed the way business approach SEO.</p>
        <div className='flex flex-col gap-3 mt-10 lg:flex-row lg:justify-center lg:flex-1'>
        
          {tabs.map((data) => (
           
            <div key={data.title} className=' p-2.5 border border-white/15 rounded-xl flex gap-2.5 relative '>
            <div className='absolute inset-0 border border-[#A369FF]/70 -m-px rounded-xl [mask-image:radial-gradient(80px_80px_at_0%_0%,black,transparent)]'></div>
              <div className='flex justify-center w-10 h-10 py-1 text-2xl text-center border border-white/20 rounded-xl'>{data.icon}</div>
              <div className='py-1 text-center'>{data.title}</div>
              {data.isnew && <button className='px-2 py-0 text-xs rounded-xl bg-[#8c44ff] text-white font-semibold ml-16 md:ml-96'>New</button>}
            </div>
            
          ))}
        </div>
          <div className='p-2 mt-3 border rounded-lg border-white/20'>
          <div className='bg-cover border rounded-lg aspect-video border-white/10' style={{ backgroundImage:`url(${prodimage})`}}></div>
        {/* <img src={prodimage} alt="" /> */}
          </div>
      </div>
    </section>
  )
}

export default Features
