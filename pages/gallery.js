import React from 'react';
import Image from 'next/image'

import {
  Gallery,
  Item,
} from 'react-photoswipe-gallery';

import 'photoswipe/dist/photoswipe.css';

const gallery = () => {
    const smallItemStyles = {
            cursor: 'pointer',
            objectFit: 'cover',
            width: '100%',
            maxHeight: '100%',
          }
   
  return (
    <>
        <div className='pt-32 flex items-center justify-center flex-col gap-y-1'>
        <Gallery>
      <div
        className='flex flex-row gap-1 '
        // style={{
        //   display: 'grid',
        //   gridTemplateColumns: '240px 171px 171px',
        //   gridTemplateRows: '114px 114px',
        //   gridGap: 12,
        // }}
      >
        <div className=''>
          <Item
            original="https://res.cloudinary.com/cprojects/image/upload/v1674098675/teachcomp-website-assets/large/teachcomp-club-image-full-1_hzgkrw.png"
            thumbnail="https://res.cloudinary.com/cprojects/image/upload/v1674098427/teachcomp-website-assets/thumbnails/teachcomp-club-image-1-thumbnail_nofcph.png"
            alt="Two Early learners using the Teachcomp app for coding"
          >
            {({ ref, open }) => (
              <Image
                className='rounded'
                alt='Two Early learners using the Teachcomp app for coding'
                style={{ cursor: 'pointer' }}
                src="https://res.cloudinary.com/cprojects/image/upload/v1674098427/teachcomp-website-assets/thumbnails/teachcomp-club-image-1-thumbnail_nofcph.png"
                ref={ref}
                // onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://res.cloudinary.com/cprojects/image/upload/v1674098400/teachcomp-website-assets/large/teachcomp-club-image-full-5_yxxb4f.png"
            thumbnail="https://res.cloudinary.com/cprojects/image/upload/v1674098427/teachcomp-website-assets/thumbnails/teachcomp-club-image-5-thumbnail_auvfhb.png"
            alt="Two Teachcompers coordinating an unplugged activity with a group of Early Days learners"
          >
            {({ ref, open }) => (
              <Image
                className='rounded'
                alt="Two Teachcompers coordinating an unplugged activity with a group of Early Days learners"
                src="https://res.cloudinary.com/cprojects/image/upload/v1674098427/teachcomp-website-assets/thumbnails/teachcomp-club-image-5-thumbnail_auvfhb.png"
                ref={ref}
                // onClick={open}
              />
            )}
          </Item>
        </div>
        <div className=''>
          <Item
            original="https://res.cloudinary.com/cprojects/image/upload/v1674098399/teachcomp-website-assets/large/teachcomp-club-image-full-6_erugde.png"
            thumbnail="https://res.cloudinary.com/cprojects/image/upload/v1674098427/teachcomp-website-assets/thumbnails/teachcomp-club-image-6-thumbnail_lsorfv.png"
            alt="An exciting VR unplugged section during the Teachcomp Coding Club"
          >
            {({ ref, open }) => (
              <Image
                className='rounded '
                alt="An exciting VR unplugged section during the Teachcomp Coding Club"
                src="https://res.cloudinary.com/cprojects/image/upload/v1674098427/teachcomp-website-assets/thumbnails/teachcomp-club-image-6-thumbnail_lsorfv.png"
                ref={ref}
                // onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://res.cloudinary.com/cprojects/image/upload/v1674098398/teachcomp-website-assets/large/teachcomp-club-image-full-2_vpluuz.png"
            thumbnail="https://res.cloudinary.com/cprojects/image/upload/v1674098427/teachcomp-website-assets/thumbnails/teachcomp-club-image-2-thumbnail_eqqdjt.png"
            alt="A group of learners learning Coding with the Teachcomp App."
          >
            {({ ref, open }) => (
              <Image
                className='rounded'
                alt="A group of learners learning Coding with the Teachcomp App."
                src="https://res.cloudinary.com/cprojects/image/upload/v1674098427/teachcomp-website-assets/thumbnails/teachcomp-club-image-2-thumbnail_eqqdjt.png"
                ref={ref}
                // onClick={open}
              />
            )}
          </Item>
        </div>
        
        {/* <Item
          original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
          alt="Photo of bear by Thomas Lefebvre"
        >
          {({ ref, open }) => (
            <Image
             
              src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
              ref={ref}
              onClick={open}
            />
          )}
        </Item> */}
      </div>
    </Gallery>
        </div>
    </>
  )
}

export default gallery