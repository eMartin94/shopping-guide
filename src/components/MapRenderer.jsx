'use client';

import { storeData } from '@/data/storeData';
import React, { useState } from 'react';
import { FloorSelect } from './ui/FloorSelect';
import { ControlButtons } from './ui/ControlButtons';
import { StoreDetailsModal } from './ui/StoreDetailsModal';

export const MapRenderer = () => {
  const [storeId, setStoreId] = useState('LPA10');
  const [showFloor, setShowFloor] = useState('upperFloor');
  const floorStores = storeData[showFloor].stores;

  const [showOpeningHours, setShowOpeningHours] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleFloorChange = (e) => {
    setShowFloor(e.target.value);
    setShowModal(false);
    setShowOpeningHours(false);
  };

  const selectedStore = floorStores.find((store) => store.svgId === storeId);

  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4 w-full'>
      <h2 className='text-4xl text-center'>Explora, ubica y disfruta</h2>
      <p className='mt-4 text-center'>Lunes a Domingo 10:00am a 11:00pm</p>
      <p className='font-extralight text-center'>
        El horario podría variar según el local. Para más información, ve el
        detalle del local que buscas.
      </p>

      <div className='flex flex-col w-full h-[540px] gap-4 mt-4 max-w-[900px] border border-gray-200 rounded-2xl'>
        <div className='relative w-full h-full overflow-hidden'>
          <FloorSelect handleFloorChange={handleFloorChange} />

          <ControlButtons setShowModal={setShowModal} />

          <StoreDetailsModal
            selectedStore={selectedStore}
            showModal={showModal}
            setShowModal={setShowModal}
            showOpeningHours={showOpeningHours}
            setShowOpeningHours={setShowOpeningHours}
          />
        </div>
      </div>
    </div>
  );
};
