import React, { useState } from 'react'
import { motion } from "motion/react"

function Navigation() {

  return (
    <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>

      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#home">
          Home
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#about">
          About
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#work">
          Work
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  )
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-[#030412]/40">
      <div className="mx-auto  sm:px-10 px-5 lg:px-15 max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Naitik
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

    {isOpen && (  
      <motion.div className="block overflow-hidden text-center sm:hidden"
      initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
      >
        <nav className="pb-5">
            <Navigation />
          </nav>
      </motion.div>
    )}
      
    </div>
  )
}

export default Navbar
