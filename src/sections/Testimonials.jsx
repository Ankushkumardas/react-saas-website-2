import React from "react";
import av from "../assets/avatar.jpg";
import {motion} from 'framer-motion'
function Testimonials() {
  const testtimonials = [
    {
      text: "This product has completely transformed how I manage my projet and deadlines.",
      name: "Sofia Kamal",
      title: "Director @ OSoft",
      avatarimg: av,
    },
    {
      text: "This AI product has completely transformed how I manage my projet and deadlines.",
      name: "Adam Hatter",
      title: "Director @ Zulo",
      avatarimg: av,
    },
    {
      text: "This User Interface is so futurestic and easy to use and halped me and my clients my many ways.",
      name: "Karan Singh",
      title: "Director @ MediaCenter",
      avatarimg: av,
    },
    {
      text: "This product has completely transformed how I mange my projet and deadlines.",
      name: "Ram Das",
      title: "Director @ Zepto",
      avatarimg: av,
    },
  ];
  return (
    <section className="py-20 ">
      <div className="container ">
        <h2 className="mb-3 text-6xl tracking-tighter text-center">
          Beyound Expectations.
        </h2>
        <p className="text-lg font-semibold text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text md:px-40 md:mt-3 lg:px-72 lg:text-xl">
          Our Revolutionary Ai SEO tools have transformed our clients
          strategies.
        </p>
        <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div initial={{
            translateX:'-50%',
          }}
          animate={{translateX:'0'}}
          transition={{duration:60,
          repeat:Infinity,
          ease:'linear'}}
           className="flex flex-none gap-3 mt-10 md:gap-6 ">
            {[...testtimonials,...testtimonials].map((data) => (
              <div
                key={data.title}
                className="p-4  rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.5),black)] max-w-xs flex-none inset-0 md:max-w-[360px]"
              >
                <div className="text-lg tracking-tighter md:text-md sm:text-md">{data.text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={data.avatarimg}
                    alt=""
                    srcset=""
                    className="object-cover rounded-xl h-11 w-11 "
                  />
                  <div>
                    <div>{data.name}</div>
                    <div className=" text-white/50">{data.title}</div>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
