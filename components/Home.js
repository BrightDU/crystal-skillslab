import Image from 'next/image';
import { courseCatalog } from './catalog';
import Alumni from './Alumni';

const HomePage = () => {

  return (
    <div>
      <main>
        <section id="course" className="bg-[#141B42]  pt-20 pb-0 ">
          <div className="px-10 pb-10 flex flex-col gap-4 md:flex-row items-center">
            <div className="max-w-2xl gap-2 flex flex-col md:items-start items-center">

              <h4 className=' text-[#f1ee3b]  text-5xl font-bold text-center md:text-left'>Skill up beyond limitation. <br />
                Unleash your potential!</h4>
              <p className=" font-normal text-xl text-white text-center md:text-left">Empower yourself with our accessible and affordable courses to stay relevant in the digital era</p>
              <button className="bg-[aqua] p-2 rounded-full px-4">ENROL NOW</button>
            </div>
            <Image src="/images/heroImage_.png" height="400" width="400" alt="hero" />
            {/* <div className="w-[500px] h-[500px] bg-black"></div> */}
          </div>
          <div className="bg-[#00ffc8] py-6 px-10 flex flex-col gap-6">
            <p className="text-center">Crystal Academy is an arm of Crystal EdTech, where we make technology education more accesible and inclusive for youths and adults with diverse abilities and special learning needs. Hence, we combine bth online and instructor-led training approach to enable equal participation intechnology and digital and digital literacy.
              <br />
              We provide the incusive learning environment, tools, mentorship, and support you need to level up your skils and stay relevant.
            </p>
            <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
            <div className="ml-4 mr-4 items-center bg-white rounded-xl hover:shadow-lg shadow-md p-4">
                <Image className="mx-auto" src="/images/accessibility.svg" width="300" height="150" alt="multi language" />
                <h3 className="text-lg font-semibold text-center">Accessible and Inclusive</h3>
              </div>
              <div className="ml-4 mr-4 items-center bg-white rounded-xl hover:shadow-lg shadow-md p-4">
                <Image className="mx-auto" src="/images/affordable.svg" width="300" height="150" alt="multi language" />
                <h3 className="text-lg font-semibold text-center">Affordable</h3>
              </div>
              <div className="ml-4 mr-4 items-center bg-white rounded-xl hover:shadow-lg shadow-md p-4">
                <Image className="mx-auto" src="/images/high-quality.svg" width="300" height="150" alt="multi language" />
                <h3 className="text-lg font-semibold">High-quality</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Feature list */}
        <section id="products" className="">
          <div className="text-center pb-0">
            <h2 className="text-2xl font-semibold pt-20">Choose from our course catalog</h2>
            <div className="max-w-xs md:max-w-4xl mx-auto py-12 gap-6 grid grid-cols-1 md:grid-cols-3">
              {courseCatalog.map(({courseName, courseThumbNailImage, courseThumbNailDescription}, index) => (
              <div key={index} className=" items-center bg-white hover:bg-[#FADF24] rounded-xl hover:shadow-lg shadow-md max-w-xs">
                <Image className="mx-auto" src={courseThumbNailImage} width="300" height="200" alt="accessibility" />
                <div className="p-4">
                <h3 className="text-lg font-semibold">{courseName}</h3>
                <p className="text-base">{courseThumbNailDescription}</p>
                </div>
                {/* <a href='https://forms.gle/GEYyC3dx94pnBSdH6'><button type="button" className="hover:bg-yellow bg-[#850299] rounded-3xl  text-white hover:text-green-base-dark active:bg-[#850299] font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-yellow-base">Enroll Now</button></a> */}
              </div>
              ))}
              
            </div>
          </div>
           </section>

        <Alumni />

        {/* <section id="#testimonial" className="min-h-[60vh] relative my-auto py-12 md:py-24 bg-grey-dark-base">
        <div className="w-48 h-48 border-[15px] top-64 -left-24 hidden md:block  absolute border-purple-base rounded-full" />
            <div className="w-32 h-32 border-[15px] hidden md:block absolute border-green-base rounded-full" />
            <p className="text-center">Let Our Product Speak for us</p>
            <h2 className="text-4xl text-center mt-4 mb-24 font-bold text-white">Testimonials</h2>
            <div className="flex z-10 flex-col justify-center space-y-28 md:space-y-0 md:flex-row max-w-4xl md:space-x-8 mx-auto ">
              <div className=" bg-white p-6 pt-px rounded-3xl m-4 md:m-0"> */}
        {/* <Image className="rounded-full mx-auto -mt-12"  src="/images/client-logos/Earlydays.svg" /> */}
        {/* <p className="mt-8 text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In t sit volutpat a dictumst. Auctor aliquet sed lacus, integer facilisis purus</p>
                <p className="text-center mt-4">John Doe</p>
              </div>
              <div className=" bg-white p-6 pt-px rounded-3xl m-4 md:m-0"> */}
        {/* <Image className="rounded-full mx-auto -mt-12" alt="testimonal two" layout='fill' src="/images/client-logos/Earlydays.svg" /> */}
        {/* <p className=" mt-8 text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In t sit volutpat a dictumst. Auctor aliquet sed lacus, integer facilisis purus</p>
                <p className=" text-center mt-4">John Doe</p>
              </div>
              <div className="bg-white p-6 pt-px rounded-3xl m-4 md:m-0"> */}
        {/* <Image className=" rounded-full mx-auto -mt-12" alt="testimonal three"  layout='fill'  src="/images/client-logos/Earlydays.svg" /> */}
        {/* <p className=" mt-8 text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In t sit volutpat a dictumst. Auctor aliquet sed lacus, integer facilisis purus</p>
                <p className=" text-center mt-4">John Doe</p>
              </div>
            </div>
        </section> */}

      </main>
    </div>
  )
}

export default HomePage