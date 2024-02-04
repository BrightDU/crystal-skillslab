import React, { useState } from 'react'
import { courseDetails } from '../../components/catalog'
import { useRouter } from 'next/router'

const Course = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showModal, setShowModal] = useState(false);

  const changeModalState = () => {
    setShowModal(prev => !prev)
  }

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
            <div className="h-[70px] w-[1px] bg-[#818080] mx-8"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl text-[#818080]">Duration</h1>
              <p className="text-xl font-semibold text-[#767171]">{duration}</p>
            </div>
            <div className="h-[70px] w-[1px] bg-[#818080] mx-8"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl text-[#767171]">Certificate of completion</h1>
              <p className="text-xl font-semibold text-[#767171]">Available</p>
            </div>
            <div className="h-[70px] w-[1px] bg-[#818080] mx-8"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl text-center text-[#767171]">Delivery method</h1>
              <p className="text-xl font-semibold text-[#767171]">Blended Learning</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 p-5 items-start">
            <div className="flex flex-col max-w-[600px] gap-4 bg-[#c1bfbf] rounded-3xl p-7 shadow-xl">
              <p className="text-xl">Course Overview</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-xl">Skills you'll gain</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-xl">Prerequisite Knowledge</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-xl">Syllabus</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-xl">Tuition fee</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-xl">ENROLL</p>
            </div>
            <div className="gap-4 flex flex-col">
              <h1 className="text-4xl ">Course Overview</h1>
              <p className="font-light">{courseOverview}</p>
              <h1 className="text-4xl ">Skills you'll gain</h1>
              <div className="font-light">{skillsYouWillLearn.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
              </div>
              <h1 className="text-4xl ">Prerequisite knowledge</h1>
              <div className="font-light">{prerequisite.map((request, index) => (
                <p key={index}>{request}</p>
              ))}
              </div>
              <h1 className="text-4xl ">Syllabus</h1>
              <p className="cursor-pointer text-[purple]" onClick={changeModalState}>View Syllabus</p>
              <div>

                <h1 className="text-4xl ">Tuition fee</h1>
                <p className="font-bold line-through">182,500</p>
                <p className="font-light">128,000</p>
              </div>
              <div className="flex gap-10">
                <button className="px-5 py-2 bg-[purple] rounded-full text-xl font-semibold">ENROLL NOW</button>
                <button className="px-5 py-2 border-[1px] border-black rounded-full text-xl font-semibold">REVIEWS</button>
              </div>
            </div>
          </div>

          <div className={`${showModal ? 'flex' : 'hidden'} items-center justify-center absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[grey] pt-[650px]`}>
            <div className="bg-white max-w-[500px] rounded-lg p-7 flex flex-col gap-4">
              <div>
                <h1 className="text-3xl ">Introduction to HTML 5</h1>
                <p>Module-1: 5 lessons</p>
                <p className="font-light">Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
              </div>
              <div>
                <h1 className="text-3xl ">Introduction to CSS 3</h1>
                <p>Module-2: 7 lessons</p>
                <p className="font-light">Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
              </div>
              <div>
                <h1 className="text-3xl ">Introduction to JavaScript</h1>
                <p>Module-3: 10 lessons</p>
                <p className="font-light">Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
              </div>
              <div>
                <h1 className="text-3xl ">Putting It All Together</h1>
                <p>Module-4: 5 lessons</p>
                <p className="font-light">Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
              </div>
              <div>
                <h1 className="text-3xl ">Introduction to Front-end and Backend Frameworks</h1>
                <p>Module-5: 5 lessons</p>
                <p className="font-light">Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
              </div>
              <div>
                <h1 className="text-3xl ">Deploying an application</h1>
                <p>Module-6: 2 lessons</p>
                <p className="font-light">Learn to conceptualize, research, design and implement accessible products that meet the core needs of users by collaborating with developers and other team members.</p>
              </div>
              <button className="px-5 py-2 bg-[purple] rounded-full text-xl font-semibold" onClick={changeModalState}>CLOSE</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="pt-24 text-center">
          <p>Course not found</p>
        </div>
      )
    }
  })

  return (
    itemss
  )

}

export default Course