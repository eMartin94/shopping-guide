import { IconChevronDown, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { OpeningHours } from './OpeningHours';
import { modalVariants } from '@/styles/variants';
import { useOpeningHours } from '@/hooks/useOpeningHours';

export const StoreDetailsModal = ({
  store,
  setStore,
  showModal,
  setShowModal,
  showOpeningHours,
  setShowOpeningHours,
}) => {
  const { isOpen, nextOpening } = useOpeningHours(store?.openingHours || []);
  return (
    <AnimatePresence>
      {showModal && store && (
        <motion.div
          key='modal'
          variants={modalVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='w-full h-auto max-w-[300px] min-h-[250px] absolute top-4 left-4 bg-white rounded-lg z-10 shadow-md'
        >
          <div className='flex flex-col gap-2 text-black p-4 relative'>
            <IconX
              className='absolute top-2 right-2 cursor-pointer text-gray-500 bg-gray-200 p-1 rounded-full hover:bg-gray-300 transition-all duration-500'
              onClick={() => {
                setShowModal(false);
                setShowOpeningHours(false);
                setStore('');
              }}
            />

            <div>
              <h3 className='text-xl uppercase mt-4'>{store.name}</h3>
              <p className='font-extralight'>
                {store.level}
                <span className='text-gray-300'> | </span>
                <span
                  className={`text-sm ${
                    isOpen ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {isOpen ? 'Abierto' : 'Cerrado'}
                </span>
              </p>

              <div className='mt-2'>
                <p className='text-sm font-extralight'>{store.description}</p>
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
              <p
                className={`text-sm font-extralight ${
                  isOpen ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {isOpen ? <span>Abierto</span> : <span>Cerrado</span>}
                {nextOpening && (
                  <span className='ml-2 text-gray-500'>
                    (Próximo horario: {nextOpening})
                  </span>
                )}
              </p>
              <OpeningHours
                show={showOpeningHours}
                openingHours={store.openingHours}
              />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <div>
                <h4>Categorías</h4>
                <span className='bg-gray-200 text-gray-400 p-1 text-xs rounded-md font-extralight'>
                  {store.category}
                </span>
              </div>
              <p className='text-sm text-right'>Aforo: {store.capacity}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
