import { IconChevronDown, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { OpeningHours } from './OpeningHours';
import { modalVariants } from '@/styles/variants';

export const StoreDetailsModal = ({
  selectedStore,
  showModal,
  setShowModal,
  showOpeningHours,
  setShowOpeningHours,
}) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          key='modal'
          variants={modalVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='w-full h-auto max-w-[300px] min-h-[250px] absolute top-4 left-4 bg-white rounded-lg'
        >
          {selectedStore && (
            <div className='flex flex-col gap-2 text-black p-4 relative'>
              <IconX
                className='absolute top-4 right-4 cursor-pointer text-gray-500 bg-gray-200 p-1 rounded-full hover:bg-gray-300 transition-all duration-500'
                onClick={() => {
                  setShowModal(false);
                  setShowOpeningHours(false);
                }}
              />

              <div>
                <h3 className='text-xl uppercase'>{selectedStore.name}</h3>
                <p className='font-extralight'>
                  {selectedStore.level}
                  <span className='text-gray-300'> | </span>
                  <span className='text-green-500'>Abierto</span>
                </p>
                <div className='mt-2'>
                  <p className='text-sm font-extralight'>
                    {selectedStore.description}
                  </p>
                </div>
              </div>
              <div className='w-full'>
                <div className='flex items-center gap-2'>
                  <h4>Horario</h4>
                  <motion.span
                    className=' cursor-pointer'
                    animate={{ rotate: showOpeningHours ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setShowOpeningHours(!showOpeningHours)}
                  >
                    <IconChevronDown size={18} />
                  </motion.span>
                </div>
                <OpeningHours
                  show={showOpeningHours}
                  openingHours={selectedStore.openingHours}
                />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <div>
                  <h4>Categorías</h4>
                  <span className='bg-gray-200 text-gray-400 p-1 text-xs rounded-md font-extralight'>
                    {selectedStore.category}
                  </span>
                </div>
                <p className='text-sm text-right'>
                  Aforo: {selectedStore.capacity}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
