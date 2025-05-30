'use client';

import { storeData } from '@/data/storeData';
import React, { useEffect, useRef, useState } from 'react';
import { FloorSelect } from './ui/FloorSelect';
import { ControlButtons } from './ui/ControlButtons';
import { StoreDetailsModal } from './ui/StoreDetailsModal';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { SvgUpperFloor } from './SvgUpperFloor';
import { options } from '@/constants';
import { SvgGroundFloor } from './SvgGroundFloor';

export const MapRenderer = () => {
  const svgRef = useRef(null);
  const resetTransformRef = useRef(null);

  const [store, setStore] = useState('');
  const [selectedFloor, setSelectedFloor] = useState(options[0]);
  const floorStores = storeData[selectedFloor.value].stores;
  const [showOpeningHours, setShowOpeningHours] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFloorChange = (option) => {
    setSelectedFloor(option);
    setShowModal(false);
    setShowOpeningHours(false);
    setStore('');
  };

  const selectedStore = (storeId) => {
    const found = floorStores.find((store) => store?.svgId === storeId);

    if (found) {
      setStore(found);
      setShowOpeningHours(false);
      setShowModal(true);
    } else {
      setStore(null);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (resetTransformRef.current) {
        resetTransformRef.current();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [selectedFloor]);

  useEffect(() => {}, [store]);

  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4 w-full'>
      <h2 className='text-4xl text-center'>Explora, ubica y disfruta</h2>
      <p className='mt-4 text-center'>Lunes a Domingo 10:00am a 11:00pm</p>
      <p className='font-extralight text-center'>
        El horario podría variar según el local. Para más información, ve el
        detalle del local que buscas.
      </p>
      <div className='flex flex-col w-full h-[540px] gap-4 mt-4 max-w-[900px] border border-gray-200 rounded-2xl overflow-hidden'>
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          centerOnInit
        >
          {({ zoomIn, zoomOut, resetTransform }) => {
            resetTransformRef.current = resetTransform;
            return (
              <div className='w-full h-full relative flex justify-center items-center'>
                <FloorSelect
                  selectedFloor={selectedFloor}
                  handleFloorChange={handleFloorChange}
                />

                <ControlButtons
                  zoomIn={zoomIn}
                  zoomOut={zoomOut}
                  resetTransform={resetTransform}
                />

                <StoreDetailsModal
                  store={store}
                  setStore={setStore}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  showOpeningHours={showOpeningHours}
                  setShowOpeningHours={setShowOpeningHours}
                />
                <TransformComponent wrapperClass='min-h-[540px] w-full bg-white'>
                  {selectedFloor.value === 'upperFloor' && (
                    <SvgUpperFloor
                      svgRef={svgRef}
                      selectedStore={selectedStore}
                      svgId={store.svgId}
                    />
                  )}
                  {selectedFloor.value === 'groundFloor' && (
                    <SvgGroundFloor
                      svgRef={svgRef}
                      selectedStore={selectedStore}
                      svgId={store.svgId}
                    />
                  )}
                </TransformComponent>
              </div>
            );
          }}
        </TransformWrapper>
      </div>
    </div>
  );
};
