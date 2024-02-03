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

  const itemss = courseDetails.map(({ courseDetailId, courseName, courseBannerImage, courseOverview, courseLevel, courseDeliveryMethods, courseReviews, duration, skillsYouWillLearn, prerequisite }) => {
    if (courseDetailId == id) {
      return (
        <div>
          <div className="px-9 py-12 pt-[7rem] flex flex-col md:items-start items-center gap-10">
            <h1 className="font-bold text-3xl md:text-5xl">{courseName}</h1>
            <p className="text-xl">{courseOverview}</p>
            <button className="px-5 py-2 bg-[purple] rounded-full text-xl font-semibold">ENROLL NOW</button>
          </div>
          <div className="flex flex-col md:flex-row bg-[aqua] items-center p-14 mx-auto justify-center">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl text-[#101010]">Tuition fee</h1>
              <p className="font-bold">182,500</p>
              <p>128,000</p>
            </div>
            <div className="h-[70px] w-[1px] bg-black mx-8"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl text-[#101010]">Duration</h1>
              <p className="text-xl font-semibold">{duration}</p>
            </div>
            <div className="h-[70px] w-[1px] bg-black mx-8"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl">Certificate of completion</h1>
              <p className="text-xl font-semibold">Available</p>
            </div>
            <div className="h-[70px] w-[1px] bg-black mx-8"></div>
            <div className="flex flex-col items-center  gap-8">
              <h1 className="font-bold text-2xl text-center">Delivery method</h1>
              <p className="text-xl font-semibold">Blended Learning</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 p-5 items-start">
            <div className="flex flex-col max-w-[600px] gap-4 bg-[grey] rounded-3xl p-7">
              <p className="text-3xl">Course Overview</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-3xl">Skills you'll gain</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-3xl">Prerequisite Knowledge</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-3xl">Syllabus</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-3xl">Tuition fee</p>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-3xl">ENROLL</p>
            </div>
            <div className="gap-4 flex flex-col">
              <h1 className="text-5xl ">Course Overview</h1>
              <p>{courseOverview}</p>
              <h1 className="text-5xl ">Skills you'll gain</h1>
              <div>{skillsYouWillLearn.map(skill => (
                <p>{skill}</p>
              ))}
              </div>
              <h1 className="text-5xl ">Prerequisite knowledge</h1>
              <div>{prerequisite.map(request => (
                <p>{request}</p>
              ))}
              </div>
              <h1 className="text-5xl ">Syllabus</h1>
              <p className="cursor-pointer text-[purple]" onClick = {changeModalState}>View Syllabus</p>
              <div>

                <h1 className="text-5xl ">Tuition fee</h1>
                <p className="font-bold">182,500</p>
                <p>128,000</p>
              </div>
              <div className="flex gap-10">
                <button className="px-5 py-2 bg-[purple] rounded-full text-xl font-semibold">ENROLL NOW</button>
                <button className="px-5 py-2 border-[1px] border-black rounded-full text-xl font-semibold">REVIEWS</button>
              </div>
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