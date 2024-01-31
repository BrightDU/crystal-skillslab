import { useState } from 'react';

import Faq from '../components/Faq';
import ChromeOS from '../components/ChromeOS';
import MacOS from '../components/MacOS';
import Windows from '../components/Windows';

const Download = () => {
    const [downloadOs, setDownloadOs] = useState("windows")
    return (
        <>
            <section className=" bg-yellow-base h-80 relative">
                <div className="">
                <div className="pt-24" />
                    <div className="w-32 h-32 border-green-base border-[15px]  absolute rounded-full"/>
                    <div className="w-32 h-32 border-purple-base border-[15px] top-44 right-10 absolute rounded-full"/>
                    <div className=""/>
                </div>
                    <p className="max-w-2xl mx-auto text-3xl pt-8">DOWNLOAD TEACHCOMP</p>
            </section>
            <div className="bg-green-base h-40 md:h-20">
                <div className=" p-2 md:ml-20 md:flex h-[90%] space-x-6 items-center">
                    <p>Choose your OS:</p>
                    <button className={`download_button ${downloadOs === "windows" && "bg-yellow-base text-white"}`}  onClick={()=> setDownloadOs("windows")}>Windows</button>
                    <button className={`download_button ${downloadOs === "mac" && "bg-yellow-base text-white"}`} onClick={()=> setDownloadOs("mac")}>macOS</button>
                    <button className={`download_button ${downloadOs === "linux" && "bg-yellow-base text-white"}`} onClick={()=> setDownloadOs("chromeos")}>ChromeOS</button>
                </div>
            </div>
            { downloadOs === "windows" && (<Windows />)}
            { downloadOs === "mac" && (<MacOS />)}
            { downloadOs === "chromeos" && (<ChromeOS />)}

            <div className=' max-w-4xl mx-auto'>
                <Faq />
            </div>
        </>
    )
}

export default Download