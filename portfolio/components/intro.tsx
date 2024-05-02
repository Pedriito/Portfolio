'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
import { TypeAnimation } from 'react-type-animation'
import { type } from 'node:os'

export default function Intro () {
  const { ref } = useSectionInView('Accueil', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const onButtonClick = () => {
    const link = document.createElement('a')
    link.href = './CV1.pdf'
    link.download = 'CV1.pdf'
    link.click()
  }
  return (
    <section
      ref={ref}
      id='home'
      className='mt-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 bg-opacity-45'
    >
      <div className='flex items-center justify-center '>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='https://media.licdn.com/dms/image/D4E03AQG6-sKuWCePXA/profile-displayphoto-shrink_200_200/0/1672871323215?e=1718841600&v=beta&t=0asIDYD2ep5qab96R9rtyWob3fXNInD_5q4lF2LYYVY'
              alt='Profile pic'
              width={192}
              height={192}
              quality={95}
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            className=' absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋🏾
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'> Bonjour, Moi c&apos;est Pierre-Elie</span>{' '}
        Je suis un développeur{' '}
        <TypeAnimation
          sequence={[
            'Full-Stack',
            'Javascript',
            'ReactJS',
            'Front-End',
            'Back-End'
          ]}
          speed={{type: 'keyStrokeDelayInMs', value: 300}}
          repeat={Infinity}
          wrapper='span'
          className='text-orange-400 font-bold'
          omitDeletionAnimation={true}
          preRenderFirstString={true}
          style={{ display: 'inline-block' }}

        />
        avec une expérience de
        <span className='font-bold'> 3 ans </span> dans le développement web.
        Spécialement avec
        <span className='underline'> React JS</span>. Je vis en région
        Parisienne 🇫🇷
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          {' '}
          Contactez moi ici{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <button
          onClick={onButtonClick}
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
        >
          Téléchargez CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </button>
        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2  text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10'
          href='https://linkedin.com/in/pierreelie/'
          target='_blank'
        >
          {' '}
          <BsLinkedin />
        </a>
        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2  text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10'
          href='https://github.com/Pedriito'
          target='_blank'
        >
          {' '}
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
