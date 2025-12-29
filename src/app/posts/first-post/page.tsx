import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'first-post',
  description: 'Show first post.',
};

export default function FirstPostPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">最初の投稿</h1>
      <Link href="/" className="text-blue-500 hover:underline">
        ホームへ戻る
      </Link>
    </div>
  );
}
