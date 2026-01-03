import Link from 'next/link';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function PostsLayout({ children }: Props) {
  return (
    <div className="space-y-4">
      <main>{children}</main>
      <footer>
        <Link href="/" className="text-blue-500 hover:underline">
          ← ホームへ戻る
        </Link>
      </footer>
    </div>
  );
}
