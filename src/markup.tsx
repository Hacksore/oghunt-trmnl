import type { FC } from "hono/jsx";

export interface Post {
  id: string;
  name: string;
  tagline: string;
  description: string;
  createdAt: string;
  thumbnailUrl: string;
  votesCount: number;
}

export const Markup: FC<{ posts: Post[] }> = ({ posts }: { posts: Post[] }) => {
  const allPosts = posts.map((post) => (
    <div key={post.id}>
      <div class="flex pb-2">
        <img src={post.thumbnailUrl} class="w-8 h-8 mr-4" alt={post.name} />
        <h2 class="font-bold">{post.name}</h2>
      </div>
      <p>{post.tagline}</p>
    </div>
  ));

  return (
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold">🚀 Top 5 oghunt.com launches</h2>
      {allPosts}
    </div>
  );
};
