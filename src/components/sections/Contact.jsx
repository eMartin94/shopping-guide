import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-3xl h-full p-4 bg-black text-white'>
      <h2 className='text-3xl sm:text-4xl text-center'>Contáctame</h2>
      <p className='mt-2 text-sm sm:text-base text-center font-extralight'>
        No dude en comunicarse conmigo para cualquier consulta o comentario.
      </p>

      <div className='flex flex-col items-center justify-center w-full py-4 mt-4 gap-4'>
        <div className='flex flex-col sm:flex-row w-full gap-4'>
          <input
            type='text'
            placeholder='Nombre'
            className='w-full sm:w-1/2 border border-gray-300 bg-white px-4 py-2 placeholder:text-gray-500 rounded-lg focus:outline-none'
          />
          <input
            type='email'
            placeholder='Correo electrónico'
            className='w-full sm:w-1/2 border border-gray-300 bg-white px-4 py-2 placeholder:text-gray-500 rounded-lg focus:outline-none'
          />
        </div>

        <textarea
          placeholder='Mensaje'
          className='w-full border border-gray-300 bg-white px-4 py-2 placeholder:text-gray-500 rounded-lg resize-none focus:outline-none'
          rows={4}
        ></textarea>

        <button className='w-full bg-black text-white py-2 cursor-pointer rounded-lg hover:bg-white hover:text-black border border-gray-300 transition-colors duration-300'>
          Enviar
        </button>
      </div>

      <div className='flex flex-col items-center justify-center w-full mt-4 gap-4'>
        <p className='text-sm text-center font-extralight'>
          También puedes contactarme por mis redes sociales
        </p>
        <ul className='flex flex-col sm:flex-row items-center justify-center gap-4 w-full'>
          <li>
            <Link
              href={'https://www.instagram.com/?hl=es-la'}
              className='flex items-center gap-1 text-sm hover:text-gray-500'
            >
              <IconBrandInstagram /> <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link
              href={'https://twitter.com/home?lang=es'}
              className='flex items-center gap-1 text-sm hover:text-gray-500'
            >
              <IconBrandTwitter /> <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link
              href={'https://github.com/'}
              className='flex items-center gap-1 text-sm hover:text-gray-500'
            >
              <IconBrandGithub /> <span>GitHub</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center justify-center w-full mt-8'>
        <Link
          href={'/'}
          className='text-sm hover:text-gray-500 font-extralight'
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
