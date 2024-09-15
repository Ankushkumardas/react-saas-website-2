import React from 'react'
import Logo from '../assets/Amazon.jpg'
import Logo1 from '../assets/google.png'
import Logo2 from '../assets/Deloitte.png'
import Logo3 from '../assets/meta.png'
import Logo4 from '../assets/acc.png'
import Logo5 from '../assets/info.png'
import { motion } from 'framer-motion'
function Logoticker() {
  return (
    <section className='py-20 md:py-40'>
      <div className='container '>
        <div className='flex items-center gap-20 '>
          <div className='items-center flex-1 md:flex-none'>

            <h2 className='text-lg'>Trusted by top innovative teams</h2>
          </div>
          <div className=' flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>

            <motion.div initial={{translateX:'-50%'}} animate={{translateX:'0'}} transition={{duration:30, repeat:Infinity}}
             className='flex items-center justify-center flex-none gap-12 -translate-x-1/2'>
              <img src={Logo} alt="" className='w-auto h-10 pt-1' />
              <img src={Logo1} alt="" className='w-auto h-10' />
              <img src={Logo2} alt="" className='w-auto h-10' />
              <img src={Logo3} alt="" className='w-auto h-8' />
              <img src={Logo4} alt="" className='w-auto h-8 pb-2' />
              <img src={Logo5} alt="" className='w-auto h-8 pb-1' />
              <img src={Logo} alt="" className='w-auto h-10 pt-1' />
              <img src={Logo1} alt="" className='w-auto h-10' />
              <img src={Logo2} alt="" className='w-auto h-10' />
              <img src={Logo3} alt="" className='w-auto h-8' />
              <img src={Logo4} alt="" className='w-auto h-8 pb-2' />
              <img src={Logo5} alt="" className='w-auto h-8 pb-1' />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logoticker
