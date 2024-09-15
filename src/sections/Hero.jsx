import React from "react";
import { motion } from 'framer-motion'
function Hero() {
  return (
    <section className=" h-[630px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_50%,black_80%,transparent)]">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

      <div className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-purple-500 border rounded-full top-1/2 left-1/2 border-white/10 bg-[radial-gradient(50%_50%_at_16%_18%,white,rgb(184,148,255)_37%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      <motion.div style={{translateX:'-50%',translateY:'-50%'}} animate={{rotate:'1turn',}} transition={{repeat:Infinity,
        duration:30,ease:"linear",
      }} className="absolute h-[344px] md:h-[444px] md:w-[444px] w-[344px] border rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-white opacity-10">
        <div className="absolute left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2"></div>
        <div className="absolute top-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-1/2"></div>
        <div className="absolute inline-flex justify-center w-4 h-4 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full bg-white/20 top-1/2 left-full">
          <div className="w-2 h-2 bg-white rounded-full "></div>
        </div>
      </motion.div>

      <motion.div style={{translateX:'-50%',translateY:'-50%'}} animate={{rotate:'1turn',}} transition={{repeat:Infinity,
        duration:60,ease:"linear",
      }} className="absolute md:h-[644px] md:w-[644px] h-[444px] w-[444px]  rounded-full border-2 border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div>

      <motion.div style={{translateX:'-50%',translateY:'-50%'}} animate={{rotate:'1turn',}} transition={{repeat:Infinity,
        duration:90,ease:"linear",
      }} className="absolute md:h-[844px] md:w-[844px] h-[544px] w-[544px] border rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-white opacity-15">
        <div className="absolute top-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-1/2"></div>
        <div className="absolute left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2"></div>
        <div className="absolute inline-flex justify-center w-4 h-4 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full bg-white/20 top-full left-1/2">
          <div className="w-2 h-2 bg-white rounded-full "></div>
        </div>
      </motion.div>

      <div className="absolute md:h-[644px] md:w-[644px] h-[844px] w-[844px]  rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>

      <div className="absolute  h-[1044px] w-[1044px]  rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>

      <motion.div style={{translateX:'-50%',translateY:'-50%'}} animate={{rotate:'1turn',}} transition={{repeat:Infinity,
        duration:120,ease:"linear",
      }} className="absolute md:h-[844px] md:w-[844px] h-[544px] w-[544px] border rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-white opacity-15">
        <div className="absolute top-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-1/2"></div>
        <div className="absolute left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2"></div>
        <div className="absolute inline-flex justify-center w-4 h-4 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full bg-white/20 top-full left-1/2">
          <div className="w-2 h-2 bg-white rounded-full "></div>
        </div>
      </motion.div>

      <div className="container relative mt-24">
        <h1 className=" text-8xl font-semibold  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.9))] bg-white text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="mt-5 text-lg text-center text-white/70 lg:px-52 md:px-40">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly experience and AI tools.
        </p>

        <div className="flex justify-center mt-5 ">
          <button className="relative px-2 py-1.5 rounded-lg   font-semibold text-sm bg-gradient-to-b from-[#190d2e] to-[#361864] outline-none shadow-[0px_0px_8px_#8c45ff] ">
            <div className="absolute inset-0 ">
              <div className="absolute inset-0 border rounded-lg border-white/15"></div>
            </div>
            <span>Join Waitlist</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
