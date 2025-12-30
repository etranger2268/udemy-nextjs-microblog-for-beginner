import Image from 'next/image';
import Link from 'next/link';
import { PROFILE } from '@/constants';

export default function Home() {
  return (
    <main className="mt-2 space-y-10">
      <section className="text-center">
        <p>{PROFILE}</p>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold">📝エンジニアのブログ</h2>
        <div className="grid flex-wrap max-w-300 gap-10 mx-auto grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          <article>
            <Link href="/">
              <Image
                src="/thumbnail01.jpg"
                alt="thumbnail01"
                width={950}
                height={400}
                className="mb-5 shadow-xl transition-all duration-300 cursor-pointer hover:translate-0.5 hover:shadow-none"
              />
              <h2 className="font-medium">SSGとSSRの使い分けの場面はいつなのか？</h2>
            </Link>
            <small>December 30, 2025</small>
          </article>
          <article>
            <Link href="/">
              <Image
                src="/thumbnail01.jpg"
                alt="thumbnail01"
                width={950}
                height={400}
                className="mb-5 shadow-xl transition-all duration-300 cursor-pointer hover:translate-0.5 hover:shadow-none"
              />
              <h2 className="font-medium">SSGとSSRの使い分けの場面はいつなのか？</h2>
            </Link>
            <small>December 30, 2025</small>
          </article>
          <article>
            <Link href="/">
              <Image
                src="/thumbnail01.jpg"
                alt="thumbnail01"
                width={950}
                height={400}
                className="mb-5 shadow-xl transition-all duration-300 cursor-pointer hover:translate-0.5 hover:shadow-none"
              />
              <h2 className="font-medium">SSGとSSRの使い分けの場面はいつなのか？</h2>
            </Link>
            <small>December 30, 2025</small>
          </article>
          <article>
            <Link href="/">
              <Image
                src="/thumbnail01.jpg"
                alt="thumbnail01"
                width={950}
                height={400}
                className="mb-5 shadow-xl transition-all duration-300 cursor-pointer hover:translate-0.5 hover:shadow-none"
              />
              <h2 className="font-medium">SSGとSSRの使い分けの場面はいつなのか？</h2>
            </Link>
            <small>December 30, 2025</small>
          </article>
        </div>
      </section>
    </main>
  );
}
