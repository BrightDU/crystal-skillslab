import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const currentUrl = useRouter();
  return (
    <footer className="bg-[#121212]  text-white">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill={currentUrl.asPath === '/' ? '#fbdf25' : '#fff'}><path fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,250.7C960,256,1200,224,1320,208L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
      <div className='p-6 md:px-12 md:pt-14 '>
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-around">
      <div className="flex flex-col space-y-6 text-center">
        <h3 className="text-2xl text-green-base font-bold pb-4 text-[yellow]">Social</h3>
        <div className="flex justify-around items-center space-x-6">
          <Link href="https://web.facebook.com/Crystaledtech" target="_blank"><Image src="/images/facebook.svg" alt="Facebook" width="24px" height="24px" className="rounded-lg"/></Link>
          <Link href="https://www.linkedin.com/company/crystal-edtech/"><Image src="/images/linkedin.png" alt="linkedin"  width="24px" height="24px" className="rounded-lg"/></Link>
          <Link href="#"><Image src="/images/youtube.svg" alt="youtube"  target="_blank" width="24px" height="24px" className="rounded-lg"/></Link>
        </div>
        <h3 className="text-2xl text-green-base font-bold pb-4 text-[yellow]">Download Teachcomp</h3>
        <div className="justify-around items-center space-x-6">
          Making Accessible Learning. Enhancing Capabilities.
        </div>
      </div>
      <div className="text-center">
        {/* <h3 className="text-2xl text-green-base font-bold pb-4">Navigation</h3>
        <div>
          <ul>
            <li className="pt-2"><Link href="/">Home</Link></li>
            <li className="pt-2"><Link href="/#about">About</Link></li>
            <li><Link href='#products'>Products</Link></li>
            <li className="pt-2"><Link href="/#impact">Impact</Link></li>
            <li className="pt-2"><Link href="/#blog">Blog</Link></li>
            <li className="pt-2"><Link href="#">Contact</Link></li>
          </ul>
        </div> */}
        <h3 className="text-2xl text-green-base font-bold pb-4 text-[yellow]">Navigation</h3>
        <div className="flex flex-col gap-4">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Solution</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        
        
      </div>
      <div className="text-center  flex flex-col ">
        <h3 className="text-2xl text-green-base font-bold pb-4 text-[yellow]">Policy</h3>
        <ul>
          <li className="pt-2"><Link href='#'>Privacy policy</Link></li>
          <li className="pt-2"><Link href='#'>Terms of service</Link></li>
        </ul>
        <h3 className="text-2xl text-green-base font-bold pb-4 text-[yellow]">Contact</h3>
        <ul>
          <li className="pt-2"><Link href='#'>Email</Link></li>
          <li className="pt-2"><Link href='#'>info@crystalat.co</Link></li>
        </ul>
        <p className="text-lg text-green-base font-bold mt-5 text-[yellow]" >Phone</p>
        <ul>
          <li className="pt-2"><Link href='#'>+2347015994605</Link></li>
          <li className="pt-2"><Link href='#'>+2348099487063</Link></li>
          <li className="pt-2"><Link href='#'>+2349059498016</Link></li>
        </ul>
      </div>
    </div>
    <p className="text-center text-[yellow] font-bold text-xl mt-10">Powered by Crystal EdTech</p>
    </div>
  </footer>
  )
}

export default Footer