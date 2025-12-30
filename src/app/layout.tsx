import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import { DESCRIPTION, NAME, TITLE } from '@/constants';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} antialiased font-sans`}>
        <header>
          <Image src="/profile.png" alt="Icon" width={48} height={48} />
          <h1>{NAME}</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
