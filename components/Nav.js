import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { XIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/solid';

const Nav = () => {
    const [menuToggled, setMenuToggled] = useState(false)
  return (
    <div className=" fixed w-full  shadow-md bg-white z-10">
        <div className="flex px-14 py-3 items-center justify-between">
            <div className="flex items-center">
                <Image src="/images/skillsLab_dark.png" width="150" height="40" className="" alt="Crystal Academy" />
            </div>
            <div className = "flex gap-8 items-center md:relative absolute">
              <h3 className=" font-semibold" ><a href="#home" >Home</a></h3>
              <h3 className=" font-semibold" ><a href="#products" >Course</a></h3>
              <h3 className=" font-semibold" ><a href="#alumni" >Alumni</a></h3>
              <button className="border-[2px] border-[green] p-2 rounded-full text-[green]">Find your course</button>
            </div>
           
        </div>
        
    </div>
  )
}

export default Nav