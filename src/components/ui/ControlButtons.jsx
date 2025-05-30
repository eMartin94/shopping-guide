import { IconFocusCentered, IconMinus, IconPlus } from '@tabler/icons-react';
import React from 'react';

export const ControlButtons = ({ zoomIn, zoomOut, resetTransform }) => {
  return (
    <div className='absolute bottom-4 right-4 z-10 flex flex-col gap-2 items-end'>
      <button
        className='p-2 border border-gray-300 rounded-lg hover:bg-black bg-white hover:text-white text-black cursor-pointer'
        onClick={() => zoomIn()}
      >
        <IconPlus />
      </button>
      <button
        className='p-2 border border-gray-300 rounded-lg hover:bg-black bg-white hover:text-white text-black cursor-pointer'
        onClick={() => zoomOut()}
      >
        <IconMinus />
      </button>
      <button
        className='p-2 border border-gray-300 rounded-lg hover:bg-black bg-white hover:text-white text-black cursor-pointer'
        onClick={() => {
          resetTransform();
        }}
      >
        <IconFocusCentered />
      </button>
    </div>
  );
};
