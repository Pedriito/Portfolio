'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
export default function Contact () {
  const { ref } = useSectionInView('Contact')
  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{ once: true }}
    >
      <SectionHeading> Contactez moi</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        {' '}
        Vous pouvez me contacter directement à{' '}
        <a className='underline' href='mailto:pelie.romer@gmail.com'>
          pelie.romer@gmail.com
        </a>{' '}
        ou via le formulaire ci-dessous.
      </p>
      <form
        className='mt-10 flex flex-col'
        action={formData => {
          console.log(formData)
        }}
      >
        <input
          placeholder='Votre Email'
          name='senderEmail'
          required
          type='email'
          className='h-14 rounded-lg border border-black/10 text-justify p-4'
        />
        <textarea
        name='message'
          placeholder='Votre message'
          maxLength={500}
          className='h-52 my-3 rounded-lg borderBlack p-4'
        />
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all'
        >
          Envoyer{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:transition-all group-hover:translate-x-1 group-hover:-translate-y-1 focus:scale-[1.15] hover:scale-[1.15] active:scale-105' />{' '}
        </button>
      </form>
    </motion.section>
  )
}
