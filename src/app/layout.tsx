import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import { DESCRIPTION, NAME, TITLE } from '@/constants';

type Props = Readonly<{
  children: React.ReactNode;
}>;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased font-sans max-w-311 mx-auto py-0 px-4 mt-12 mb-24 `}
      >
        <header className="flex flex-col items-center">
          <Image src="/profile.png" alt="Icon" width={60} height={60} className="rounded-full" />
          <h1 className="text-2xl font-bold mt-2 mb-0">{NAME}</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
