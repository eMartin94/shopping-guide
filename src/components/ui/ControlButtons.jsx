import { IconFocusCentered, IconMinus, IconPlus } from '@tabler/icons-react';
import React from 'react';

export const ControlButtons = ({ setShowModal }) => {
  return (
    <div className='absolute bottom-4 right-4 z-10 flex flex-col gap-2 items-end'>
      <button className='p-2 border border-gray-300 rounded-lg hover:bg-white/85 bg-white text-black cursor-pointer'>
        <IconPlus />
      </button>
      <button className='p-2 border border-gray-300 rounded-lg hover:bg-white/85 bg-white text-black cursor-pointer'>
        <IconMinus />
      </button>
      <button className='p-2 border border-gray-300 rounded-lg hover:bg-white/85 bg-white text-black cursor-pointer'>
        <IconFocusCentered onClick={() => setShowModal(true)} />
      </button>
    </div>
  );
};
