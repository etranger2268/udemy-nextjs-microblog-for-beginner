import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-7xl font-bold">
        Learn to{' '}
        <Link href="/posts/first-post" className="text-blue-500 hover:underline">
          Next.js!
        </Link>
      </h1>
    </div>
  );
}
