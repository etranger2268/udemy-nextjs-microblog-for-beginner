import Image from 'next/image';
import Link from 'next/link';
import { PROFILE } from '@/constants';

export default function Home() {
  return (
    <main className="mt-2 space-y-10">
      <section className="text-center">
        <p>{PROFILE}</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div>
          <article>
            <Link href="/">
              <Image
                src="/thumbnail01.jpg"
                alt="thumbnail01"
                width={950}
                height={400}
              />
              <h2>SSGとSSRの使い分けの場面はいつなのか？</h2>
            </Link>
            <small>December 30, 2025</small>
          </article>
        </div>
      </section>
    </main>
  );
}
