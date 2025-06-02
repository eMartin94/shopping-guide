import { IconArrowRight, IconShoppingBag } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className='w-full h-full flex justify-center p-4'>
      <nav className='w-full h-full max-w-7xl flex justify-between items-center'>
        <Link href={'/'} className='h-full flex items-center gap-2'>
          <Image src={'/sg-logo.svg'} alt='logo' width={32} height={32} />
          <span className='hidden sm:block mt-3 text-xl'>Shopping Guide</span>
        </Link>
        <Link
          href={'/contact'}
          className='flex items-center gap-2 border-2 border-white py-2 px-4 rounded-4xl cursor-pointer hover:bg-white hover:text-black transition-all duration-500 group'
        >
          contáctame
          <IconArrowRight className='translate-x-0 group-hover:translate-x-1 transition-all duration-500' />
        </Link>
      </nav>
    </header>
  );
};
