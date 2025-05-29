import { itemSelectVariants, menuSelectVariants } from '@/styles/variants';
import { IconChevronDown } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const options = [
  { value: 'upperFloor', label: 'Planta Alta' },
  { value: 'groundFloor', label: 'Planta Baja' },
];

export const FloorSelect = ({ handleFloorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    handleFloorChange({ target: { value: option.value } });
    setIsOpen(false);
  };

  return (
    <div className='absolute top-4 right-4 inline-block w-36'>
      <button
        onClick={toggleOpen}
        className='w-full p-2 pr-10 border border-gray-300 rounded-lg bg-white text-black relative flex justify-between items-center'
      >
        {selected.label}
        <motion.span
          className='absolute right-3 cursor-pointer'
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className='absolute top-full left-0 mt-2 w-full z-10 flex flex-col gap-2'
            variants={menuSelectVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {options.map((option) => (
              <motion.li
                key={option.value}
                variants={itemSelectVariants}
                className='p-2 hover:bg-white cursor-pointer bg-white/70 text-black rounded-lg'
                onClick={() => handleSelect(option)}
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
