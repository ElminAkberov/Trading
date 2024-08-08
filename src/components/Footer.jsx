import React from 'react'
import { FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { TiSocialFacebook } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className="bg-[#24126A] pt-20 pb-10 max-md:py-10 max-md:text-center text-white">
        <div className="max-w-[1320px]  justify-between px-custom max-md:pl-custom max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px]  max-lg:max-w-[720px] max-md:max-w-[450px] mx-auto">
          <div className="md:grid grid-cols-4 max-lg:grid-cols-2  gap-x-5">
            <div className="dm-sans ">
              <NavLink><img src={`/assets/img/white-logo.svg`} className="max-md:mx-auto pt-10 w-[200px] max-lg:w-[190px] max-md:w-[180px]" alt="" /></NavLink>
              <p className='text-[15px] py-5'>Making the world a better place through constructing elegant hierarchies.</p>
              <h2 className='spartan text-[13px] pb-4'>Follow Us On:</h2>
              <div className="flex cursor-pointer max-md:justify-center gap-x-3">
                <TiSocialFacebook size={20} className='hover:text-[#3E80FF] duration-300' />
                <PiInstagramLogoLight size={20} className='hover:text-[#3E80FF] duration-300' />
                <FaTwitter size={20} className='hover:text-[#3E80FF] duration-300' />
                <FaLinkedin size={20} className='hover:text-[#3E80FF] duration-300' />
                <FaPinterest size={20}  className='hover:text-[#3E80FF] duration-300' />
                <FaYoutube size={20}  className='hover:text-[#3E80FF] duration-300' />
              </div>
            </div>
            <div className="dm-sans ">
              <h2 className='spartan py-5'>Solutions</h2>
              <p className='pb-3 cursor-pointer'>Marketing</p>
              <p className='pb-3 cursor-pointer'>Analytics</p>
              <p className='pb-3 cursor-pointer'>Commerce</p>
              <p className='pb-3 cursor-pointer'>Insights</p>
            </div>
            <div className="dm-sans ">
              <h2 className='spartan py-5'>Support</h2>
              <p className='pb-3 cursor-pointer'>Pricing</p>
              <p className='pb-3 cursor-pointer'>Documentation</p>
              <p className='pb-3 cursor-pointer'>Guides</p>
              <p className='pb-3 cursor-pointer'>API status</p>
            </div>
            <div className="dm-sans ">
              <h2 className='spartan py-5'>Subscribe</h2>
              <p>Subscribe to our newsletter for the latest updates</p>
            </div>

          </div>
          <hr className='mt-10' />
          <div className="dm-sans flex justify-between mt-3">
            <p>© 2024 CryptoLand - All Rights Reserved</p>
            <p>Developed by <NavLink className={"underline hover:no-underline"} target='_blank' to={"https://github.com/ElminAkberov"}> Elmin Akberov</NavLink></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer