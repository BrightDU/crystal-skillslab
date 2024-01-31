import React from 'react';
import Link from 'next/link';
import SignUpModal from './Modal';
import Image from 'next/image'

const Windows = () => {
  return (
    <>
        <h4 className='text-xl gap-4 p-2 md:p-10'>Use these steps to Install the Teachcomp app for Windows.</h4>
        <div className='md:flex gap-4 p-2 md:p-10 '>
            
            <div className='flex basis-1/2'>
                <div className='download_page_number'>1</div>
                <div className='flex-col space-y-4'>
                <p>Click the "Download Teachcomp" button.</p>
               
                {/* <Image src='images/Microsoft.svg' /> */}
                {/* <div>__________ or __________</div> */}
                {/* <p className='text-blue-500 font-semibold'><Link href="#">Direct download</Link></p> */}
                </div>
            </div>
            <div className='flex basis-1/2 mt-6 md:mt-0'>
                {/* <div className='download_page_number'>1</div> */}
                <div>
                  {/* <Image src='images/Microsoft.svg' /> */}
                  <SignUpModal />
                </div>
            </div>
        </div>
        <div className='md:flex gap-4 p-2 md:p-10 '>
            <div className='flex basis-1/2 mt-6 md:mt-0'>
                <div className='download_page_number'>2</div>
                <div>
                <p>Run the .exe file to choose the installation options (It is recommended to choose the "only for me" option.)</p>
                </div>
            </div>
            <div className='flex basis-1/2'>
                {/* <div className='download_page_number'>2</div> */}
                <div className='flex-col space-y-4'>
                  <Image className='block mt-2' src="/images/exe-files/exe-file-1.svg" alt="Run the .exe file to start the installation." />
                </div>
            </div>
        </div>
        <div className='md:flex gap-4 p-2 md:p-10 '>
            <div className='flex basis-1/2 mt-6 md:mt-0'>
                <div className='download_page_number'>3</div>
                <div>
                  <p>Click "Install" to install the app on your computer.</p>
                </div>
            </div>
            <div className='flex basis-1/2'>
                {/* <div className='download_page_number'>3</div> */}
                <div className='flex-col space-y-4'>
                  <Image className='block mt-2' src="/images/exe-files/exe-file-2.svg" alt='Click "Install" to install the app on your computer.' />
                </div>
            </div>
        </div>
        <div className='md:flex gap-4 p-2 md:p-10 '>
            <div className='flex basis-1/2 mt-6 md:mt-0'>
                <div className='download_page_number'>4</div>
                <div>
                  <p>Wait up till Teachcomp completes installation.</p>
                </div>
            </div>
            <div className='flex basis-1/2'>
                {/* <div className='download_page_number'>4</div> */}
                <div className='flex-col space-y-4'>
                  <Image className='block mt-2' src="/images/exe-files/exe-file-3.svg" alt="Wait uptill Teachcomp completes installation" />
                </div>
            </div>
        </div>
        <div className='md:flex gap-4 p-2 md:p-10 '>
            <div className='flex basis-1/2 mt-6 md:mt-0'>
                <div className='download_page_number'>5</div>
                <div>
                  <p>Once installation is complete, click "Finish" to close setup and open Teachcomp automatically.</p>
                </div>
            </div>
            <div className='flex basis-1/2'>
                {/* <div className='download_page_number'>5</div> */}
                <div className='flex-col space-y-4'>
                  <Image className='block mt-2' src="/images/exe-files/exe-file-4.svg" alt='Once installation is complete, click "Finish" to close setup and open Teachcomp automatically.' />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Windows