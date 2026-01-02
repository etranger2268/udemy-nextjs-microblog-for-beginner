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
  const postContent: PostContent = await getPostData(id);
  return <div>{postContent}</div>;
}
