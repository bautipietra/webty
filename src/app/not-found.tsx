import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <section className='relative min-h-screen bg-black overflow-hidden grid place-items-center'>
      <Image
        className='absolute top-0 left-1/2 transform -translate-x-1/2 h-full'
        src='/assets/404/radial2.svg'
        alt='background'
        width={1920}
        height={1080}
        draggable='false'
      />
      <div className='z-10 container mx-auto px-4'>
        <Link href='/'>
          <Image
            className='absolute top-12 left-1/2 -translate-x-1/2'
            src='/assets/logo.png'
            alt='logo'
            width={256}
            height={128}
            draggable='false'
          />
        </Link>
        <div className='md:max-w-lg mx-auto select-none'>
          <Image
            className='mx-auto'
            src='/assets/404/404.png'
            alt='404'
            width={512}
            height={254}
            draggable='false'
          />
          <div className='flex flex-wrap items-end justify-center -m-6'>
            <div className='w-full md:w-1/2 p-6'>
              <div className='md:max-w-xs'>
                <h2 className='font-heading font-semibold text-white text-4xl'>
                  Something went wrong!
                </h2>
              </div>
            </div>
            <div className='w-full md:w-1/2 p-6'>
              <a
                className='flex items-center max-w-max font-heading font-semibold text-xs text-white hover:text-gray-200 tracking-px uppercase'
                href='#'>
                <div className='flex items-center -m-1 border-solid border-2 border-white hover:border-gray-200'>
                  <div className='w-auto p-1'>
                    <svg
                      width={19}
                      height={19}
                      viewBox='0 0 19 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8 14.75L2.75 9.5M2.75 9.5L8 4.25M2.75 9.5L16.25 9.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div className='w-auto p-1'>
                    <Link href='/'>Go back to Homepage</Link>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
