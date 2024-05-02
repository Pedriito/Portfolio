'use client'

import React from 'react'
import SectionHeading from './section-heading'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import HotelIcon from '@mui/icons-material/Hotel'
import RepeatIcon from '@mui/icons-material/Repeat'
import Typography from '@mui/material/Typography'

export default function Experience () {
  const { ref } = useSectionInView('Experience')

  return (
    <section
      id='experience'
      ref={ref}
      className='scroll-mt-28 mb-28 sm:mb-40 bg-opacity-40'
    >
      <SectionHeading>Mes experiences </SectionHeading>

      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <Timeline position='alternate-reverse'>
            <TimelineItem position={item.position}>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                <TimelineOppositeContent className='font-light'>
                  {item.date}
                </TimelineOppositeContent>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
                <Typography>{item.location}</Typography>
                
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </React.Fragment>
      ))}
    </section>
  )
}
