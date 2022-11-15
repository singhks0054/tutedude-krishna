import React from 'react';
import Refer from '../components/Refer';
import { offerData } from '../images/index';

export default function ReferEarn() {
  return (
    <main className='mx-8 sm:mx-12 lg:mx-40 my-4 text-purple'>
      <Refer />
      <h1 className='text-xl font-semibold tracking-wider my-8 '>
        How does it work ?
      </h1>
      <div className='grid sm:grid-cols-2 gap-y-6'>
        {/* @ts-ignore */}
        {offerData.map(({ title, desc, img }, i) => (
          <div key={i} className='flex gap-4  '>
            <img
              src={img}
              alt='images'
              // height={16}
              // width={16}
              className=' p-2 bg-[#d9d9d940] rounded-full'
            />
            <div className='text-black'>
              <h1 className='font-semibold'>{title}</h1>
              <p className=' text-sm'>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className='text-md  mb-2 mt-8 '>Friends Who Enrolled</h1>
      <h1 className='text-md   mb-4 '>Terms & Conditions</h1>
    </main>
  );
}
