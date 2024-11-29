import React from 'react'

export default function Nav() {
    return (
        <div className="mt-[100px] h-[100vh]">
      <div className="bg-[#f4f4f6] pb-[70px]">
        <div className="logo h-[108px] w-[300px] sm:w-[250px] pt-[24px] px-[32px] flex justify-center border bg-white mx-auto">
          <img src="./101.png" alt="Logo" className="h-[70px] w-[75px]" />
        </div>

        <center>
          <a href="#home">
            <div className="flex pl-4 sm:pl-7 gap-4 items-center border w-[150px] sm:w-[186px] h-[48px] mt-[20px] rounded-[4px] uppercase font-semibold bg-white">
              <img src="./104.svg" alt="Home" className="text-white" />
              Home
            </div>
          </a>
          <a href="#about">
            <div className="flex pl-4 sm:pl-7 gap-4 items-center border w-[150px] sm:w-[186px] h-[48px] mt-[20px] rounded-[4px] uppercase font-semibold text-black bg-white">
              <img src="./105.svg" alt="About" className="text-white" />
              About Me
            </div>
          </a>
          <a href="#service">
            <div className="flex pl-4 sm:pl-7 gap-4 items-center border w-[150px] sm:w-[186px] h-[48px] mt-[20px] rounded-[4px] uppercase font-semibold text-black bg-white">
              <img src="./106.svg" alt="Service" className="text-white" />
              Service
            </div>
          </a>
          <a href="#skill">
            <div className="flex pl-4 sm:pl-7 gap-4 items-center border w-[150px] sm:w-[186px] h-[48px] mt-[20px] rounded-[4px] uppercase font-semibold text-black bg-white">
              <img src="./107.svg" alt="Skills" className="text-white" />
              Skills
            </div>
          </a>
          <a href="#portfolio">
            <div className="flex pl-4 sm:pl-7 gap-4 items-center border w-[150px] sm:w-[186px] h-[48px] mt-[20px] rounded-[4px] uppercase font-semibold text-black bg-white">
              <img src="./108.svg" alt="Portfolio" className="text-white" />
              Portfolio
            </div>
          </a>
          <a href="#contact">
            <div className="flex pl-4 sm:pl-7 gap-4 items-center border w-[150px] sm:w-[186px] h-[48px] mt-[20px] rounded-[4px] uppercase font-semibold text-black bg-white">
              <img src="./111.svg" alt="Contact" className="text-white" />
              Contact
            </div>
          </a>
        </center>
      </div>
    </div>
    )
}
