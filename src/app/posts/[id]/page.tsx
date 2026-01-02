import { Suspense } from 'react';

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
  return <h2 className="text-xl font-semibold">ID: {id}</h2>;
}
