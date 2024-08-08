import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoChevronUpSharp } from 'react-icons/io5'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { TiSocialFacebook } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

function App() {
 
  const handleScroll = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const sections = [
    { id: 0, question: 'How can I participate in the ICO Token sale?', answer: 'Lorem ipsum dolor sit amet...' },
    { id: 1, question: 'How can I purchase bitcoin?', answer: 'Lorem ipsum dolor sit amet...' },
    { id: 2, question: 'What cryptocurrencies can I use to purchase?', answer: 'Lorem ipsum dolor sit amet...' },
    { id: 3, question: 'What is ICO Crypto?', answer: 'Lorem ipsum dolor sit amet...' },
    { id: 4, question: 'Do I need an account to place an order?', answer: 'Lorem ipsum dolor sit amet...' },
    { id: 5, question: 'How do I benefit from the ICO Token?', answer: 'Lorem ipsum dolor sit amet...' }
  ];
  let [open, setOpen] = useState({})
  const handleOpen = (e) => {

    setOpen(prev => ({
      ...prev,
      [e]: !prev[e]
    }))

  }
  return (
    <>
      <button onClick={handleScroll} className='fixed text-[#fff] rounded-[5px] right-0 mr-5 mb-5 text-[20px] bg-[#3e80ff] w-[45px] h-[45px] z-20 mx-auto flex justify-center items-center bottom-0'><IoChevronUpSharp /></button>
      <div className='bg-[#24126A] max-lg:text-center relative text-white  lg:pt-[180px] pb-[180px] max-lg:pt-[130px] max-lg:pb-[150px]  max-md:pt-[110px] max-md:pb-[100px] duration-300 '>
        <img src="/assets/img/hero-shape.svg" className='absolute bottom-[-1px]' alt="" />
        <div className="max-w-[1320px]  max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px] max-lg:max-w-[720px]  max-md:max-w-[450px] flex justify-between mx-auto items-center">
          <div className="max-md:max-w-[450px] max-lg:mx-auto px-[12px] pt-[30px] ">
            <p className='spartan text-[15px] mb-[20px]'>Start Envesting & Earn Money</p>
            <h1 className='spartan_bold text-[38px] max-lg:text-[30px] max-md:text-[24px] font-bold'>Say Goodbye To <br /> Idle <span className='relative z-10'><img src="/assets/img/text-shape.svg" className='absolute left-0 bottom-[3px] -z-10' alt="" /> Money.</span> </h1>
            <p className='dm-sans  max-lg:text-[15px] mt-[15px] lg:mb-5'>Invest your spare change in Bitcoin and save with <br /> crypto to e arn interest in real time.</p>
            <div className="max-md:w-[100%] inline-block group relative ">
              <NavLink className='bg-[#3E80FF] duration-500 inline-block mt-[30px] max-md:w-[60%] text-[15px] max-lg:text-[14px] dm-sans_m py-[14px] px-[25px] rounded-full group-hover:text-[#24126A] group-hover:bg-[#fff]'>Discover More</NavLink>
            </div>
          </div>
          <div className="pr-32 max-[1200px]:pr-20 relative max-lg:hidden duration-300">
            <img src="/assets/img/home2-bg.png" alt="" />
            <img src="/assets/img/eth.png" className='absolute top-0 z-20 animate-eth left-[30%] ' alt="" />
            <img src="/assets/img/bit1.png" className='absolute bottom-10 animate-eth  left-[30%] ' alt="" />
            <img src="/assets/img/bit2.png" className='absolute  top-[25%] opacity-65 z-10 left-[35%]  animate-eth   ' alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-[1320px]  max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px] max-lg:max-w-[720px]  max-md:max-w-[450px] mx-auto">
        <div className="pt-[50px] pb-[70px] max-md:pt-[40px] text-center max-md:pb-[60px]  ">
          <div className="px-[300px] max-[1200px]:px-[200px] max-lg:px-[20px] mb-[60px]">
            <h2 className='text-[14px] text-[#3E80FF] spartan mb-[10px]'>Why Choose us</h2>
            <h3 className='text-[34px] max-md:text-[24px] text-[#24126A] spartan_bold'>Our Features</h3>
            <p className='text-[#727272] max-md:text-[15px] dm-sans leading-[28px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="bg-gray ">
            <div className="mx-[10px] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5">
              <div style={{ boxShadow: "0px 0px 30px rgba(81, 94, 125, 0.082)" }} className="bg-white hover:scale-105 duration-500 hover:border-b-[#3E80FF] hover:border-b-4 cursor-pointer hover:border-t-[#3E80FF] hover:border-t-4 card1 mt-[30px] rounded-[20px]  px-[50px] py-[40px]">
                <div className="">
                  <img src="/assets/img/card1.png" className='h-[150px] mx-auto' alt="" />
                </div>
                <div className="">
                  <h3 className='mt-[30px] mb-[15px] text-[18px] spartan_bold text-[#3b368c]'>Instant Exchage</h3>
                  <p className='text-[#727272] text-[15px] dm-sans leading-[28px]'>Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.</p>
                </div>
              </div>
              <div style={{ boxShadow: "0px 0px 30px rgba(81, 94, 125, 0.082)" }} className="bg-white hover:scale-105 duration-500 hover:border-b-[#3E80FF] hover:border-b-4 cursor-pointer hover:border-t-[#3E80FF] hover:border-t-4 card1 mt-[30px] rounded-[20px]  px-[50px] py-[40px]">
                <div className="">
                  <img src="/assets/img/card2.png" className='h-[150px] mx-auto' alt="" />
                </div>
                <div className="">
                  <h3 className='mt-[30px] mb-[15px] text-[18px] spartan_bold text-[#3b368c]'>Safe & Secure</h3>
                  <p className='text-[#727272] text-[15px] dm-sans leading-[28px]'>Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.</p>
                </div>
              </div>
              <div style={{ boxShadow: "0px 0px 30px rgba(81, 94, 125, 0.082)" }} className="bg-white hover:scale-105 duration-500 hover:border-b-[#3E80FF] hover:border-b-4 cursor-pointer hover:border-t-[#3E80FF] hover:border-t-4 card1 mt-[30px] rounded-[20px]  px-[50px] py-[40px]">
                <div className="">
                  <img src="/assets/img/card3.png" className='h-[150px] mx-auto' alt="" />
                </div>
                <div className="">
                  <h3 className='mt-[30px] mb-[15px] text-[18px] spartan_bold text-[#3b368c]'>Instant Trading</h3>
                  <p className='text-[#727272] text-[15px] dm-sans leading-[28px]'>Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F7FA]">
        <div className="max-w-[1320px] text-center py-[60px] px-[12px]  max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px] max-lg:max-w-[720px]  max-md:max-w-[450px] mx-auto">
          <div className="px-[300px] max-[1200px]:px-[200px] max-lg:px-[20px]">
            <h3 className='text-[14px] spartan text-[#3E80FF] mb-[12px]'>Ready to get started?</h3>
            <h3 className='text-[34px] max-md:text-[24px] text-[#24126A] spartan_bold mb-[18px]'>3 Steps To Start</h3>
            <p className='text-[#727272] max-md:text-[15px]  dm-sans leading-[28px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="grid md:grid-cols-3">
            <div className="">
              <div className="mt-[60px] lg:flex cursor-pointer group ">
                <div className="lg:pr-[30px]">
                  <p style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.089)" }} className='bg-white mx-auto mb-[30px] justify-center items-center rounded-full h-[70px] w-[70px]  flex text-[#24126A] group-hover:text-[#fff] group-hover:bg-[#3E80FF] duration-500  font-bold dm-sans'>01</p>
                </div>
                <div className="">
                  <h3 className='text-[18px] spartan_bold text-[#24126A] mb-[20px] lg:text-left'>Create Your Wallet</h3>
                  <p className='text-[#727272] dm-sans leading-[28px] lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur tidio.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-[60px] lg:flex cursor-pointer group ">
                <div className="lg:pr-[30px]">
                  <p style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.089)" }} className='bg-white mx-auto mb-[30px] justify-center items-center rounded-full h-[70px] w-[70px]  flex text-[#24126A] group-hover:text-[#fff] group-hover:bg-[#3E80FF] duration-500  font-bold dm-sans'>02</p>
                </div>
                <div className="">
                  <h3 className='text-[18px] spartan_bold text-[#24126A] mb-[20px] lg:text-left'>Make Payment</h3>
                  <p className='text-[#727272] dm-sans leading-[28px] lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur tidio.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-[60px] lg:flex cursor-pointer group ">
                <div className="lg:pr-[30px]">
                  <p style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.089)" }} className='bg-white mx-auto mb-[30px] justify-center items-center rounded-full h-[70px] w-[70px]  flex text-[#24126A] group-hover:text-[#fff] group-hover:bg-[#3E80FF] duration-500  font-bold dm-sans'>03</p>
                </div>
                <div className="">
                  <h3 className='text-[18px] spartan_bold text-[#24126A] mb-[20px] lg:text-left'>Buy & Sell Coins</h3>
                  <p className='text-[#727272] dm-sans leading-[28px] lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur tidio.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="max-w-[1320px] text-center py-[60px] px-[12px]  max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px] max-lg:max-w-[720px]  max-md:max-w-[450px] mx-auto">
        <div className="px-[300px] max-[1200px]:px-[200px] max-lg:px-[20px]">
          <h3 className='text-[14px] spartan text-[#3E80FF] mb-[12px]'>Expert Team</h3>
          <h3 className='text-[34px] max-md:text-[24px] text-[#24126A] spartan_bold mb-[18px]'>Meet Our Team</h3>
          <p className='text-[#727272] max-md:text-[15px]  dm-sans leading-[28px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10">
          <div className="flex flex-col items-center group">
            <div className="">
              <img src="/assets/img/team1.jpg" className='w-[200px] h-[200px] rounded-full p-2 border border-[#eee]' alt="" />
            </div>
            <div className="py-[40px] px-[30px] relative  ">
              <h2 className='text-[#24126A] spartan'>Deco Milan</h2>
              <p className='text-[#727272] dm-sans_m text-[14px]'>Founder</p>
              <div className='flex justify-between text-[#24126A] gap-x-5 cursor-pointer  absolute  group-hover:top-28  top-[85px] opacity-0 duration-500 group-hover:opacity-100 right-3 mt-0 '>
                <TiSocialFacebook size={18} className='hover:text-[#3E80FF] duration-300' />
                <PiInstagramLogoLight size={18} className='hover:text-[#3E80FF] duration-300' />
                <FaTwitter size={18} className='hover:text-[#3E80FF] duration-300' />
                <FaLinkedin size={18} className='hover:text-[#3E80FF] duration-300' />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <div className="">
              <img src="/assets/img/team2.jpg" className='w-[200px] h-[200px] rounded-full p-2 border border-[#eee]' alt="" />
            </div>
            <div className="py-[40px] px-[30px] relative">
              <h2 className='text-[#24126A] spartan'>Liza Marko</h2>
              <p className='text-[#727272] dm-sans_m text-[14px]'>Developer</p>
              <div className='flex justify-between text-[#24126A] gap-x-5 cursor-pointer  absolute  group-hover:top-28  top-[85px] opacity-0 duration-500 group-hover:opacity-100 right-3 mt-0 '>
                <TiSocialFacebook size={18} className='hover:text-[#3E80FF] duration-300' />
                <PiInstagramLogoLight size={18} className='hover:text-[#3E80FF] duration-300' />
                <FaTwitter size={18} className='hover:text-[#3E80FF] duration-300' />
                <FaLinkedin size={18} className='hover:text-[#3E80FF] duration-300' />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <div className="">
              <img src="/assets/img/team3.jpg" className='w-[200px] h-[200px] rounded-full p-2 border border-[#eee]' alt="" />
            </div>
            <div className="py-[40px] px-[30px] relative">
              <h2 className='text-[#24126A] spartan'>John Smith</h2>
              <p className='text-[#727272] dm-sans_m text-[14px]'>Designer</p>
              <div className='flex justify-between text-[#24126A] gap-x-5 cursor-pointer  absolute  group-hover:top-28  top-[85px] opacity-0 duration-500 group-hover:opacity-100 right-3 mt-0 '>
                <TiSocialFacebook size={18} className='hover:text-[#3E80FF] duration-300' />
                <PiInstagramLogoLight size={18} className='hover:text-[#3E80FF] duration-300' />
                <FaTwitter size={18} className='hover:text-[#3E80FF] duration-300' />
                <FaLinkedin size={18} className='hover:text-[#3E80FF] duration-300' />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <div className="">
              <img src="/assets/img/team4.jpg" className='w-[200px] h-[200px] rounded-full p-2 border border-[#eee]' alt="" />
            </div>
            <div className="py-[40px] px-[30px] relative">
              <h2 className='text-[#24126A] spartan'>Amion Doe</h2>
              <p className='text-[#727272] dm-sans_m text-[14px]'>Co-Founder</p>
              <div className='flex justify-between text-[#24126A] gap-x-5 cursor-pointer  absolute  group-hover:top-28  top-[85px] opacity-0 duration-500 group-hover:opacity-100 right-3 mt-0 '>
                <TiSocialFacebook size={18} className='hover:text-[#3E80FF] duration-300' />
                <PiInstagramLogoLight size={18} className='hover:text-[#3E80FF] duration-300' />
                <FaTwitter size={18} className='hover:text-[#3E80FF] duration-300' />
                <FaLinkedin size={18} className='hover:text-[#3E80FF] duration-300' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F7FA]">
        <div className="max-w-[1320px] text-center py-[60px] px-[12px]  max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px] max-lg:max-w-[720px]  max-md:max-w-[450px] mx-auto">
          <div className="px-[300px] max-[1200px]:px-[200px] max-lg:px-[20px]">
            <h3 className='text-[14px] spartan text-[#3E80FF] mb-[12px]'>Faq</h3>
            <h3 className='text-[34px] max-md:text-[24px] text-[#24126A] spartan_bold mb-[18px]'>Frequently Asked Questions</h3>
            <p className='text-[#727272] max-md:text-[15px]  dm-sans leading-[28px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 mt-10">

            <div className="1ci">
              {sections.slice(0, 3).map(section => (
                <div onClick={() => handleOpen(section.id)} className="mb-3 cursor-pointer">
                  <div className={`flex py-4 rounded-md pl-[25px] ${!open[section.id] ? "bg-white" : "bg-[#3E80FF] text-white"} duration-300 items-center relative`}>
                    <div className="">
                      <p className='spartan text-[14px]'>{section.question}</p>
                    </div>
                    <div className="text-[35px] absolute right-7 font-extralight leading-none mb-2">{!open[section.id] ? "+" : "-"}</div>
                  </div>
                  <div className={`text-left p-[25px] dm-sans bg-white rounded-b-md ${!open[section.id] ? " hidden" : ""} duration-300 `}>{section.answer}
                  </div>
                </div>
              ))}
            </div>

            <div className="2ci">
              {sections.slice(3).map(section => (
                <div onClick={() => handleOpen(section.id)} className="mb-3 cursor-pointer">
                  <div className={`flex py-4 rounded-md pl-[25px] ${!open[section.id] ? "bg-white" : "bg-[#3E80FF] text-white"} duration-300  items-center relative`}>
                    <div className="">
                      <p className='spartan text-[14px]'>{section.question}</p>
                    </div>
                    <div className="text-[35px] absolute right-7 font-extralight leading-none mb-2">{!open[section.id] ? "+" : "-"}</div>
                  </div>
                  <div className={`text-left p-[25px] bg-white rounded-b-md dm-sans ${!open[section.id] ? "hidden" : ""}`}>{section.answer}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App