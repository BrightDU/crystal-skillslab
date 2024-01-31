import React from 'react'

const Alumni = () => {
  return (
    <div id="alumni" className="bg-[yellow] py-10 pb-20 ">
        <h1 className="font-semibold text-center mb-14 text-2xl">Hear from our Alumni!</h1>
        <div className="flex md:flex-row flex-col  items-center gap-14 max-w-5xl mx-auto">
            <div className="bg-[rgb(0,255,255)] relative flex flex-col gap-8 p-8 rounded-3xl items-center max-w-xs">
                {/* <Image 
                src=""
                width="300"
                height="200"
                alt=""
                /> */}
                <div className="w-[100px] h-[100px] bg-black rounded-full absolute top-[-50px]  m-auto"></div>
                <p className="mt-12 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad porro ullam atque debitis nesciunt ea vel odit quae, veniam nihil culpa suscipit beatae temporibus quo quibusdam quia quaerat amet expedita.</p>
                <p>John Doe</p>
            </div>
            <div className="bg-[aqua] relative flex flex-col gap-8 p-8 rounded-3xl items-center max-w-xs">
                {/* <Image 
                src=""
                width="300"
                height="200"
                alt=""
                /> */}
                <div className="w-[100px] h-[100px] bg-black rounded-full absolute top-[-50px]  m-auto"></div>
                <p className="mt-12 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad porro ullam atque debitis nesciunt ea vel odit quae, veniam nihil culpa suscipit beatae temporibus quo quibusdam quia quaerat amet expedita.</p>
                <p>John Doe</p>
            </div>
            <div className="bg-[aqua] relative flex flex-col gap-8 p-8 rounded-3xl items-center max-w-xs">
                {/* <Image 
                src=""
                width="300"
                height="200"
                alt=""
                /> */}
                <div className="w-[100px] h-[100px] bg-black rounded-full absolute top-[-50px]  m-auto"></div>
                <p className="mt-12 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad porro ullam atque debitis nesciunt ea vel odit quae, veniam nihil culpa suscipit beatae temporibus quo quibusdam quia quaerat amet expedita.</p>
                <p>John Doe</p>
            </div>
        </div>
    </div>
  )
}

export default Alumni