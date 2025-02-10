'use client';
import React from 'react';
import SectionHeading from '@/components/section-heading'; // Assurez-vous que le chemin est correct
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import ContactForm from '@/components/contactform';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contactez moi</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Vous pouvez me contacter directement à{' '}
        <a className="underline" href="mailto:pelie.romer@gmail.com">
          pelie.romer@gmail.com
        </a>{' '}
        ou via le formulaire ci-dessous.
      </p>
      <ContactForm />
    </motion.section>
  );
}