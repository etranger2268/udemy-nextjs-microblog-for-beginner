import Image from 'next/image';
import Link from 'next/link';
import { PROFILE } from '@/constants';
import { getPostsData } from '@/lib/post';

export default function Home() {
  const allPostsData = getPostsData();

  return (
    <main className="mt-2 space-y-10">
      <section className="text-center">
        <p>{PROFILE}</p>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold">📝エンジニアのブログ</h2>
        <div className="grid flex-wrap max-w-300 gap-10 mx-auto grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          {allPostsData.map(({ id, data }) => (
            <article key={id}>
              <Link href={`posts/${id}`}>
                <Image
                  src={data.thumbnail}
                  alt={data.thumbnail}
                  width={950}
                  height={300}
                  className="mb-5 shadow-xl transition-all duration-300 cursor-pointer hover:translate-0.5 hover:shadow-none"
                />
                <h2 className="font-medium">{data.title}</h2>
              </Link>
              <small>{data.date}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
