import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className='grid grid-rows-[80px_1fr_20px] items-center justify-items-center min-h-screen'>
      <Header />
      <main className='flex flex-col items-center w-full'>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
