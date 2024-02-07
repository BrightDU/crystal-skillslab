import React, { useState, useEffect } from 'react'
import { courseDetails } from '../../components/catalog'
import { useRouter } from 'next/router'
import arrowdown from "../../public/images/arrow-down.svg"
import arrowup from "../../public/images/arrow-up.svg"
import Image from 'next/image'

const Course = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showModal, setShowModal] = useState(false);
  const [activeAccord, setActiveAccord] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  const changeModalState = () => {
    setShowModal(prev => !prev)
  }

  const toggleAccord = (e) => {
    if (e.target.alt == activeAccord) {
      setActiveAccord("")
    } else {
      setActiveAccord(e.target.alt)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 300;
      const scrollPosition = window.scrollY || window.pageYOffset;


      setIsSticky(scrollPosition > scrollHeight);
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  const itemss = courseDetails.map(({ courseDetailId, courseName, courseBannerImage, courseOverview, courseLevel, courseDeliveryMethods, courseReviews, duration, skillsYouWillLearn, prerequisite }, index) => {
    if (courseDetailId == id) {
      return (
        <div key={index}>
          <div className="px-9 py-12 pt-[7rem] flex flex-col md:items-start items-center gap-10 bann">
            <h1 className="font-bold text-3xl md:text-5xl text-[yellow]">{courseName}</h1>
            <p className="text-xl text-white">{courseOverview}</p>
            <button className="px-5 py-2 bg-[purple] rounded-full text-xl font-semibold">ENROLL NOW</button>
          </div>
          <div className="flex flex-col md:flex-row bg-[#5adfd4] items-center p-14 mx-auto justify-center">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl text-[#767171]">Tuition fee</h1>
              <p className="font-bold line-through text-[#767171]">182,500</p>
              <p className="text-[#767171]">128, 000</p>
            </div>
            <div className="h-[70px] w-[1px] bg-[#818080] mx-8 md:block hidden"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl text-[#818080]">Duration</h1>
              <p className="text-xl font-semibold text-[#767171]">{duration}</p>
            </div>
            <div className="h-[70px] w-[1px] bg-[#818080] mx-8 md:block hidden"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl text-[#767171]">Certificate of completion</h1>
              <p className="text-xl font-semibold text-[#767171]">Available</p>
            </div>
            <div className="h-[70px] w-[1px] bg-[#818080] mx-8 md:block hidden"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl text-center text-[#767171]">Delivery method</h1>
              <p className="text-xl font-semibold text-[#767171]">Blended Learning</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 p-5 items-start">
            {/* <div className={`${isSticky ? "sticky top-0" : "normal"} h-[200px]`}> */}
              {/* <div className={` h-[50px]`}></div> */}
              <div className={`${isSticky ? "sticky top-5" : "normal"} hidden md:flex flex-col max-w-[600px] gap-3 bg-[#c1bfbf] rounded-3xl p-5 shadow-xl`}>
                <a href="#courseoverview"><p className="text-lg">Course Overview</p></a>
                <div className="w-full h-[1px] bg-black"></div>
                <a href="#skills"><p className="text-lg">Skills you'll gain</p></a>
                <div className="w-full h-[1px] bg-black"></div>
                <a href="#prerequisite"><p className="text-lg">Prerequisite Knowledge</p></a>
                <div className="w-full h-[1px] bg-black"></div>
                <a href="#syllabus"><p className="text-lg">Syllabus</p></a>
                <div className="w-full h-[1px] bg-black"></div>
                <a href="#tuition"><p className="text-lg">Tuition fee</p></a>
                <div className="w-full h-[1px] bg-black"></div>
                <p className="text-lg">ENROLL</p>
              </div>
              {/* </div> */}
              <div className="gap-4 flex flex-col">
                <h1 className="text-4xl " id="courseoverview">Course Overview</h1>
                <p className="font-light">{courseOverview}</p>
                <h1 className="text-4xl mt-7" id="skills">Skills you'll gain</h1>
                <div className="font-light">{skillsYouWillLearn.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
                </div>
                <h1 className="text-4xl mt-7" id="prerequisite">Prerequisite knowledge</h1>
                <div className="font-light">{prerequisite.map((request, index) => (
                  <p key={index}>{request}</p>
                ))}
                </div>
                <h1 className="text-4xl mt-7" id="syllabus">Syllabus</h1>
                <p className="cursor-pointer text-[purple]" onClick={changeModalState}>View Syllabus</p>
                <div>

                  <h1 className="text-4xl mt-7" id="tuition">Tuition fee</h1>
                  <p className="font-bold line-through">182,500</p>
                  <p className="font-light">128,000</p>
                </div>
                <div className="flex gap-10">
                  <button className="px-5 py-2 bg-[purple] rounded-full text-xl font-semibold">ENROLL NOW</button>
                  <button className="px-5 py-2 border-[1px] border-black rounded-full text-xl font-semibold">REVIEWS</button>
                </div>
              </div>
            </div>

            <div className={`${showModal ? 'flex' : 'hidden'}  justify-center fixed top-0 left-0 right-0 bottom-0 w-full h-[100%] bg-[#2e2d2d8c] pt-[40px]`}>
              <div className="bg-white max-w-[700px] rounded-lg p-7 flex flex-col gap-4 h-fit">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl ">Introduction to HTML 5</h1>
                      <p>Module-1: 5 lessons</p>
                    </div>
                    <Image
                      src={activeAccord == "html" ? arrowup : arrowdown}
                      alt="html"
                      width={50}
                      height={50}
                      className="cursor-pointer"
                      onClick={toggleAccord}
                    />
                  </div>
                  <p className={`${activeAccord == "html" ? 'block' : 'hidden'} font-light max-w-[500px]`}>Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl ">Introduction to CSS 3</h1>
                      <p>Module-2: 7 lessons</p>
                    </div>
                    <Image
                      className="cursor-pointer"
                      src={activeAccord == "css" ? arrowup : arrowdown}
                      alt="css"
                      width={50}
                      height={50}
                      onClick={toggleAccord}
                    />
                  </div>
                  <p className={`${activeAccord == "css" ? 'block' : 'hidden'} font-light max-w-[500px]`}>Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>

                </div>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl ">Introduction to JavaScript</h1>
                      <p>Module-3: 10 lessons</p>

                    </div>
                    <Image
                      src={activeAccord == "js" ? arrowup : arrowdown}
                      alt="js"
                      width={50}
                      height={50}
                      onClick={toggleAccord}
                      className="cursor-pointer"
                    />
                  </div>
                  <p className={`${activeAccord == "js" ? 'block' : 'hidden'} font-light max-w-[500px]`}>Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>

                </div>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl ">Putting It All Together</h1>
                      <p>Module-4: 5 lessons</p>
                    </div>
                    <Image
                      src={activeAccord == "all" ? arrowup : arrowdown}
                      alt="all"
                      width={50}
                      height={50}
                      onClick={toggleAccord}
                      className="cursor-pointer"
                    />
                  </div>
                  <p className={`${activeAccord == "all" ? 'block' : 'hidden'} font-light max-w-[500px]`}>Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>

                </div>
                <div>
                  <div className="flex justify-between ">
                    <div>

                      <h1 className="text-xl ">Introduction to Front-end and Backend Frameworks</h1>
                      <p>Module-5: 5 lessons</p>
                    </div>
                    <Image
                      src={activeAccord == "febe" ? arrowup : arrowdown}
                      alt="febe"
                      width={50}
                      height={50}
                      onClick={toggleAccord}
                      className="cursor-pointer"
                    />
                  </div>
                  <p className={`${activeAccord == "febe" ? 'block' : 'hidden'} font-light max-w-[500px]`}>Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl ">Deploying an application</h1>
                      <p>Module-6: 2 lessons</p>
                    </div>
                    <Image
                      src={activeAccord == "deploy" ? arrowup : arrowdown}
                      alt="deploy"
                      width={50}
                      height={50}
                      onClick={toggleAccord}
                      className="cursor-pointer"
                    />
                  </div>
                  <p className={`${activeAccord == "deploy" ? 'block' : 'hidden'} font-light max-w-[500px]`}>Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
                </div>
                <button className="px-5 py-2 bg-[purple] rounded-full text-xl font-semibold" onClick={changeModalState}>CLOSE</button>
              </div>
            </div>
          </div>
          )
    }
    // else {
            //   return (
            //     <div key={index} className="pt-24 text-center">
            //       <p>Course not found</p>
            //     </div>
            //   )
            // }
          })

          return (
          itemss
          )

}

          export default Course