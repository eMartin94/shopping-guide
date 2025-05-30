import { options } from '@/constants';
import { itemSelectVariants, menuSelectVariants } from '@/styles/variants';
import { IconChevronDown } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

export const FloorSelect = ({ handleFloorChange, selectedFloor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='absolute top-4 right-4 inline-block w-36 z-10'>
      <button
        onClick={toggleOpen}
        className='w-full p-2 pr-10 border border-gray-300 rounded-lg bg-white text-black relative flex justify-between items-center cursor-pointer focus:outline-none shadow-md'
      >
        {selectedFloor.label}
        <motion.span
          className='absolute right-3'
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className='absolute top-full left-0 mt-2 w-full z-10 flex flex-col bg-white border-gray-300 border rounded-lg overflow-hidden shadow-md'
            variants={menuSelectVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {options.map((option) => (
              <motion.li
                key={option.value}
                variants={itemSelectVariants}
                className='p-2 hover:bg-black hover:text-white cursor-pointer bg-white text-black '
                onClick={() => {
                  setIsOpen(false);
                  handleFloorChange(option);
                }}
              >
                {option.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
