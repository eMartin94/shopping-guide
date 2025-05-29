import { openingHoursVariants } from '@/styles/variants';
import { AnimatePresence, motion } from 'framer-motion';

import React from 'react';

export const OpeningHours = ({ show, openingHours }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key='hours'
          variants={openingHoursVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='overflow-hidden flex flex-col gap-1'
        >
          {openingHours.map(({ day, open, close }) => (
            <div className='flex justify-between' key={day}>
              <p className='font-extralight text-sm'>{day}</p>
              <span className='font-extralight text-sm'>
                {open} - {close}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
