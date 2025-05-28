import { Sour_Gummy } from 'next/font/google';
import '../styles/globals.css';

const sourGummy = Sour_Gummy({
  variable: '--font-sour-gummy',
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export const metadata = {
  title: 'Shopping Guide',
  description: 'Tu guía inteligente en el centro comercial',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`${sourGummy.variable} antialiased`}>{children}</body>
    </html>
  );
}
