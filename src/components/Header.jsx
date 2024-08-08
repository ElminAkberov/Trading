import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setFix(true)
      } else {
        setFix(false)
      }
    }
    window.onscroll = handleScroll

  }, [window])
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);

  return (
    <>
      <nav className={`bg-[#24126A]  duration-[500ms] py-4 ${fix ? "fixed z-30 w-full bg-white  right-0 left-0  text-[#24126A] " : " absolute w-full z-20"}`}>
        <div  className={`max-w-[1320px] px-custom max-md:pl-custom max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px]  max-lg:max-w-[720px] max-md:max-w-[450px] mx-auto   flex   justify-between items-center duration-300`}>
          <div className=" w-[200px] max-lg:w-[190px] max-md:w-[180px]"><NavLink to={"/"}><img src={`/assets/img/${fix ? "logo" : "white-logo"}.svg`} alt="" /></NavLink></div>
          <div className="lg:hidden ">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">{isOpen ? <IoCloseOutline className={`${fix && "text-black"} text-[50px] pt-2`} /> : <IoReorderThreeOutline className={`${fix && "text-black"} text-[50px] pt-2`} />}</button>
            <div style={{ margin: "80px 0" }} className={`lg:hidden w-full absolute z-20 top-0 right-0 mt-[100px]`}>
              <div  className={`${isOpen ? "py-[10px] max-h-[350px] " : "max-h-[0px] py-[0px] "} text-[#24126A]  overflow-hidden duration-500 bg-white  px-[20px] rounded-[8px]  text-[14px] dm-sans_m max-w-[1320px] max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px] max-lg:max-w-[700px] between max-md:max-w-[430px] max-[450px]:mx-custom mx-auto `}>
                <div >
                  <p className="px-4 py-[12px] text-[#3E80FF]" ><NavLink >Home</NavLink></p>
                  <p className="px-4 py-[12px] hover:text-[#3E80FF]" ><NavLink >About</NavLink></p>
                  <p className="px-4 py-[12px] hover:text-[#3E80FF]" ><NavLink >Pages</NavLink></p>
                  <p className="px-4 py-[12px] hover:text-[#3E80FF]" ><NavLink >Blog</NavLink></p>
                  <p className="px-4 py-[12px] hover:text-[#3E80FF]" ><NavLink >Contact</NavLink></p>
                </div>
              </div>
            </div>

          </div>
          <div className={`flex max-lg:hidden ${fix ? "text-[#24126A]" : "text-white"}  dm-sans_m text-[15px]`}>
            <p className="pr-5 py-[12px]" ><NavLink className={"hover:text-[#3E80FF] duration-500"}>Home</NavLink></p>
            <p className="px-5 py-[12px]" ><NavLink className={"hover:text-[#3E80FF] duration-500"}>About</NavLink></p>
            <p className="px-5 py-[12px]" ><NavLink className={"hover:text-[#3E80FF] duration-500"}>Pages</NavLink></p>
            <p className="px-5 py-[12px]" ><NavLink className={"hover:text-[#3E80FF] duration-500"}>Blog</NavLink></p>
            <p className="px-5 py-[12px]" ><NavLink className={"hover:text-[#3E80FF] duration-500"}>Contact</NavLink></p>
          </div>
          <div className="max-md:hidden dm-sans_m  ">
            <button className={`${fix ? "bg-[#3E80FF] hover:bg-[#24126A] duration-300 text-white" : "bg-white hover:text-white duration-300 hover:bg-[#3e80ff]"}  text-[#24126A] text-[15px] py-[14px] px-[30px] rounded-full`}>
              Get Started
            </button>
          </div>

        </div>
      </nav>

    </>
  );
};

export default Navbar;
