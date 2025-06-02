import Link from 'next/link';
import React from 'react';

export const NotFoundComponent = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center w-full h-screen bg-black text-white gap-4'>
      <div className='flex flex-col items-center justify-center w-1/2 h-full gap-4'>
        <h1 className='text-9xl font-black'>404</h1>
        <p className='font-extralight'>Página no encontrada</p>
        <Link
          href={'/'}
          className='text-sm font-extralight text-gray-500 hover:text-white transition-colors duration-300'
        >
          Volver al inicio
        </Link>
      </div>
      <div className='flex items-centar justify-center w-full md:w-1/2 h-1/2 md:h-full'>
        <svg
          id='pin'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 980 980'
          width={450}
          height={450}
          className='w-full h-full'
        >
          <path
            id='ps'
            d='m490.54,688.82c-103.85,0-188.04,10.12-188.04,22.6s84.19,22.6,188.04,22.6,188.04-10.12,188.04-22.6-84.19-22.6-188.04-22.6Zm0,33.21c-48.8,0-88.35-4.75-88.35-10.62s39.56-10.62,88.35-10.62,88.35,4.75,88.35,10.62-39.56,10.62-88.35,10.62Z'
            className='fill-white stroke-none animate-pulse'
          />
          <path
            id='pt'
            d='m605.56,414.83c0-63.52-51.5-115.02-115.02-115.02s-115.02,51.5-115.02,115.02c0,18.09,4.18,35.2,11.62,50.43h0l.04.08c.72,1.47,1.47,2.93,2.25,4.36l91.56,177.86c4.94,7.11,12.98,7.62,17.7,0l92.48-176.98c.94-1.7,1.84-3.42,2.7-5.17l.08-.15h0c7.44-15.23,11.62-32.34,11.62-50.43Zm-101.95,63.7c-3.7,3.64-8.13,5.47-13.29,5.47s-9.6-1.82-13.33-5.47c-3.73-3.64-5.6-8.04-5.6-13.2s1.87-9.55,5.6-13.2,8.18-5.47,13.33-5.47,9.58,1.82,13.29,5.47c3.7,3.64,5.55,8.04,5.55,13.2s-1.85,9.55-5.55,13.2Zm17.55-82.25c-1.9,2.55-5.01,5.69-9.33,9.42-4.68,4.03-7.88,7.08-9.6,9.15-1.96,2.37-3.55,6.72-4.8,13.06-.89,4.27-3.23,6.4-7.02,6.4s-6.92-1.57-9.55-4.71c-2.64-3.14-3.96-6.61-3.96-10.4,0-4.62,1.47-11.39,4.4-20.31,2.93-8.92,4.4-16.04,4.4-21.37,0-3.55-.95-5.95-2.84-7.2-1.48-1.01-4-1.51-7.55-1.51-.95,0-2.43.7-4.44,2.09-2.01,1.39-4.06,2.09-6.13,2.09-3.02,0-4.53-2.16-4.53-6.49,0-7.05,3.64-13.06,10.93-18.04,6.52-4.5,13.48-6.75,20.88-6.75,24.65,0,36.97,9.3,36.97,27.9,0,10.84-2.61,19.73-7.82,26.66Z'
            className='fill-white stroke-none animate-bounce'
          />
        </svg>
      </div>
    </div>
  );
};
