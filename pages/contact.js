import Image from 'next/image';

const Contact = () => {
    return (
        <section className="min-h-[80vh] relative overflow-hidden z-0 flex flex-col justify-center">
        <h1 className="text-4xl mt-28 text-center">Enjoy full Access</h1>
        <p className="text-center">Pay for only what you need with our flexible pricing calculator.</p>
        <Image className="absolute bottom-0 left-0 send-to-back" src="/images/green-ring.svg" alt="green ring"/>
        <Image className="absolute bottom-0 right-0 send-to-back" src="/images/pink-ring.svg"  alt="pink ring"/>
        <div className="flex flex-col md:flex-row rounded-xl p-2 md:p-8 !w-[90%] md:!h-[80%] md:!w-[80%] !h-[90%] mx-auto ">
          <div className="basis-1/2">
            <h2 className="text-3xl p-6">Get in touch</h2>
            <p className="px-6"><strong>Email</strong>: info@crystalat.co</p>
            <p className="px-6">+2348169924004</p>
            <Image className="" src="/images/contact-image.svg"  alt="contact image ring" />
          </div>
          <div className="m-4 basis-1/2 md:p-6">
            <form>
              <div className="flex md:space-x-2 flex-wrap md:flex-nowrap">
                <label className="my-2">
                <input type="text" placeholder="Your name" className="focus:ring-pink-base focus:border-pink-base border border-gray-300 w-full rounded-full px-4 py-2 shadow-inner" />
              </label>
                <label className="my-2">
                <input type="tel" placeholder="Your phone number" className="focus:ring-pink-base focus:border-pink-base w-full border border-gray-300 rounded-full px-4 py-2 shadow-inner" />
              </label>

              </div>
              <div className="flex flex-col space-y-4">
                <label className="">
                <input type="email" placeholder="Your email" className="focus:ring-pink-base focus:border-pink-base border border-gray-300 w-full rounded-full px-4 py-2 shadow-inner" />
              </label>
              <label>
                <textarea className="border w-full rounded-xl px-4 py-2 h-40 focus:ring-pink-base border-gray-300 focus:border-pink-base" placeholder="Your message"/>
              </label>
              </div>
              <button className="bg-black px-6 py-2 text-white rounded-full hover:bg-slate-800" type="submit">Send</button>
              
            </form>
          </div>
        </div>
      </section>
    )
}

export default Contact