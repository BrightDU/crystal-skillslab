import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { XIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/solid';

const Nav = () => {
  const [menuToggled, setMenuToggled] = useState(false)

  const clickNav = (e) => {
    console.log(menuToggled);
    setMenuToggled(prev => !prev)
  }
  return (
    <div className=" fixed w-full  shadow-md bg-white z-10">
      <div className="flex px-14 py-3 items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/skillsLab_dark.png" width="150" height="40" className="" alt="Crystal Academy" />
        </div>
        <div className={`flex gap-8 items-center md:relative navv ${menuToggled ? 'show' : ''} absolute`}>
          <Link href="/"><h3 className="cursor-pointer font-semibold" onClick={clickNav}>Home</h3></Link> 
          <h3 className=" font-semibold" onClick={clickNav}><a href="#products" >Course</a></h3>
          <h3 className=" font-semibold" onClick={clickNav}><a href="#alumni" >Alumni</a></h3>
          <button className="border-[2px] border-[green] p-2 rounded-full text-[green]" onClick={clickNav}><a href="#products" >Find your course</a></button>
        </div>
        {menuToggled ? <XIcon width="30px" className="md:hidden block cursor-pointer" onClick={clickNav}/> : <MenuIcon width="30px" onClick={clickNav} className="md:hidden block cursor-pointer"/>}
        {/* <MenuIcon width="30px" onClick={clickNav} className="md:hidden block cursor-pointer"/> */}
      </div>

    </div>
  )
}

export default Nav