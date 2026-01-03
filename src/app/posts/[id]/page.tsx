import { Suspense } from 'react';
import type { PostContent } from '@/lib/post';
import { getPostData } from '@/lib/post';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return [
    { id: 'pre-rendering' },
    { id: 'prerendering-about' },
    { id: 'react-next' },
    { id: 'ssg-ssr' },
  ];
}

export default function PostPage({ params }: Props) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <PostPageContent params={params} />
    </Suspense>
  );
}

async function PostPageContent({ params }: Props) {
  const { id } = await params;
  const { title, date, blogContentHTML }: PostContent = await getPostData(id);
  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <small className="text-gray-700">{date}</small>
      <div dangerouslySetInnerHTML={{ __html: blogContentHTML }} />
    </article>
  );
}
