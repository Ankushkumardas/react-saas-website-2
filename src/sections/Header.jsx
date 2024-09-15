import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx";
function Header() {
  
  const [menu, setmenu] = useState(false);
  const handleclick = () => {
    setmenu(!menu);
  }
  return (
    <header className='sticky top-0 z-10 py-4 border-b border-white/15 md:border-none sm:border-none'>
      <div className='container '>
        <div className=' flex justify-between border px-6 py-1.5 border-white/15 rounded-xl max-w-2xl mx-auto backdrop-blur '>
          <div>
            <div className='inline-flex items-center justify-center w-10 h-10 px-6 py-2 border rounded-lg border-white/20'>
              Logo
            </div>
          </div>

          <div className='hidden md:block '>
            <nav className='flex gap-8 pt-2 '>

              <a href="#" className='transition text-white/70 hover:text-white'>Features</a>
              <a href="#" className='transition text-white/70 hover:text-white'>Developers</a>
              <a href="#" className='transition text-white/70 hover:text-white'>Pricing</a>
              <a href="#" className='transition text-white/70 hover:text-white'>ChangeLogs</a>
            </nav>
          </div>

          <div className='flex items-center gap-4 '>
            <button className='relative px-2 py-1.5 rounded-lg   font-semibold text-sm bg-gradient-to-b from-[#190d2e] to-[#361864] outline-none shadow-[0px_0px_8px_#8c45ff] sm:hidden md:block lg:block'>
              <div className='absolute inset-0 '>
                <div className='absolute inset-0 border rounded-lg border-white/15'></div>
              </div>
              <span>Join Waitlist</span></button>
            <IoMenu size={25} className=' md:hidden' onClick={ handleclick } />
            <div>
              {
                menu ? 
                
                <div className='absolute right-0 flex flex-col gap-2 p-4 mt-3 border top-10 border-white/10 rounded-xl backdrop-blur '>
                <span onClick={()=>setmenu(false)}><RxCross2 className=''/></span>
                  <a href='#features'>Features</a>
                  <span>Developers</span>
                  <span>Pricing</span>
                  <span>ChangeLog</span>
                  
                </div>
                
                :
                 <RxCross2 className='hidden '/>
              }
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
