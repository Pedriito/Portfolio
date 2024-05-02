'use client'
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
export default function About () {
  const {ref} = useSectionInView('À propos', 0.5);
  return (
    <motion.section
      ref={ref}
      className=' max-w-[45rem] text-center leading-8 sm:mb- scroll-mt-28 mt-28 bg-opacity-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className='mb-3'>
        Après l'obtention du{' '}
        <span className='font-medium'>BTS en systèmes numériques</span> avec une
        spécialisation en informatique, j'ai débuté ma carrière dans le domaine
        de la programmation embarquée.
      </p>
      <p className='mb-3'>
        Passionné de technologies, j'ai rapidement développé un intérêt pour le
        développement web lorsque j'ai été amené à créer des interfaces de
        contrôle-commande pour mes projets.
      </p>
      <p className='mb-3'>
        Mon parcours s'est ensuite orienté vers le développement web, où j'ai
        approfondi mes compétences en <span className=''>JavaScript</span> et
        dans les frameworks modernes tels que{' '}
        <span className='font-medium'> Javascript</span>,
        <span className='font-medium'> Typescript</span> et{' '}
        <span className='font-medium'>ReactJS</span>.
      </p>
      <p className='mb-3'>
        Pour enrichir mes connaissances et obtenir une formation approfondie,
        j'ai intégré une école d'informatique, où j'ai pu collaborer avec des
        professionnels chevronnés.
      </p>
      <p className="">
        Aujourd'hui, je mets mes compétences au service d'entreprises évoluant
        dans l'industrie électronique, combinant la rigueur de la programmation
        embarquée à la créativité du développement web.
      </p>
    </motion.section>
  )
}
