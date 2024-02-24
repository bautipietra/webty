'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Righteous, Pacifico } from 'next/font/google'

const righteous = Righteous({ weight: '400', subsets: ['latin'] })
const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

export const Hero = () => {
  useEffect(() => {
    const scrollHandler = () => {
      const sections = document.querySelectorAll(
        '.horizontal-container'
      )

      sections.forEach((section: any, index) => {
        const distanceToTop = section.getBoundingClientRect().top

        let opacity = distanceToTop / window.innerHeight // Invertir el cálculo de la opacidad

        if (opacity < 0) opacity = 0 // Asegurar que la opacidad no sea menor que 0
        if (opacity > 1) opacity = 1 // Asegurar que la opacidad no sea mayor que 1

        let translateX = Math.max(
          0,
          (window.innerHeight - distanceToTop) / 5
        )

        if (index % 2 === 0) {
          translateX = -translateX
        }
        section.style.opacity = opacity
        section.style.transform = `translateX(${translateX}px)`
        if (distanceToTop > 500) section.style.opacity = 1
      })
    }

    setTimeout(() => {
      const sections = document.querySelectorAll(
        '.horizontal-container'
      )
      sections.forEach((section) =>
        section.classList.add('transition-enabled')
      )
    }, 100)

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <section className='relative bg-white overflow-hidden grid grid-rows-[2fr_3fr] min-h-screen'>
      <Image
        className='absolute top-0 right-0 rotate max-lg:hidden'
        src='/assets/hero/circle-double-element.svg'
        alt='background pattern'
        width='620'
        height='858'
        draggable='false'
      />
      <Image
        className='absolute top-0 left-0 rotate max-lg:hidden'
        src='/assets/hero/circle-double-element.svg'
        alt='background pattern'
        width='620'
        height='858'
        draggable='false'
      />
      <div className='grid justify-center items-center text-center'>
        <div>
          <h2
            className={`${pacifico.className} text-3xl mb-4 text-gray-600 font-black max-sm:text-xl`}>
            Diseño y desarrollo de páginas web
          </h2>
          <div className='relative z-10 inline-block'>
            <div className='rounded absolute w-1/2 h-1  bg-gradient-to-l from-gray-400 to-gray-100 f right-0 top-0'></div>
            <div className='rounded absolute w-1/2 h-1  bg-gradient-to-r from-gray-400 to-gray-100 left-0 -bottom-10 mb-2 xs:mb-3 max-sm:mb-6'></div>
            <h1
              className={`${righteous.className} absolute top-0 left-0 mt-4 sm:mt-8 font-heading text-8xl sm:text-10xl text-white font-semibold text-outline`}>
              Webty
            </h1>
            <div className='absolute top-0 left-0 w-full h-16 mt-4 sm:mt-8  sm:h-24 bg-white'></div>
            <h1
              className={`${righteous.className} relative font-heading text-black text-8xl sm:text-10xl font-semibold`}>
              Webty
            </h1>
          </div>
        </div>
      </div>
      <div className='grid gap-8 grid-rows-2'>
        <div className='grid grid-cols-6 gap-8 px-8 z-10 horizontal-container'>
          <div className='col-span-1 bg-gray-400 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-400/30 max-h-96 max-sm:col-span-2'>
            <Image
              className='w-full h-full object-cover'
              src='/assets/hero/project-1.png'
              alt='project'
              width='600'
              height='600'
              draggable='false'
            />
          </div>
          <div className='col-span-3 bg-gray-400 rounded-3xl overflow-hidden shadow-2xl shadow-green-500/30 max-h-96 max-sm:hidden'>
            <Image
              className='w-full h-full object-cover'
              src='/assets/hero/project-2.png'
              alt='project'
              width='800'
              height='600'
              draggable='false'
            />
          </div>
          <div className='col-span-2 bg-gray-400 rounded-3xl overflow-hidden shadow-2xl shadow-red-600/30 max-h-96 max-sm:col-span-4'>
            <Image
              className='w-full h-full object-cover'
              src='/assets/hero/project-3.png'
              alt='project'
              width='600'
              height='600'
              draggable='false'
            />
          </div>
        </div>
        <div className='grid grid-cols-6 gap-8 px-8 z-10 horizontal-container'>
          <div className='col-span-2 bg-gray-400 rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/30 max-h-96 max-sm:col-span-4'>
            <Image
              className='w-full h-full object-cover'
              src='/assets/hero/project-4.png'
              alt='project'
              width='600'
              height='600'
              draggable='false'
            />
          </div>
          <div className='col-span-3 bg-gray-400 rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/30 max-h-96 max-sm:hidden'>
            <Image
              className='w-full h-full object-cover'
              src='/assets/hero/project-5.png'
              alt='project'
              width='600'
              height='600'
              draggable='false'
            />
          </div>
          <div className='col-span-1 bg-gray-400 rounded-3xl overflow-hidden shadow-2xl shadow-red-500/30 max-h-96 max-sm:col-span-2'>
            <Image
              className='w-full h-full object-cover'
              src='/assets/hero/project-6.png'
              alt='project'
              width='600'
              height='600'
              draggable='false'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
