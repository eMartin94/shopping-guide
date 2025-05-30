import { openingHoursVariants } from '@/styles/variants';
import { AnimatePresence, motion } from 'framer-motion';
import { dayTranslations } from '@/constants';

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
              <span className='text-sm font-extralight text-gray-700'>
                {dayTranslations[day] || day}
              </span>
              <span className='text-sm font-extralight text-gray-500'>
                {open && close ? `${open} - ${close}` : 'Cerrado'}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
