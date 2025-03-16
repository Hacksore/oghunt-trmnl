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
    <div class="post" key={post.id}>
      <div class="flex">
        <img
          src={post.thumbnailUrl}
          style={{ width: 24, height: 24 }}
          alt={post.name}
        />
        <h2>{post.name}</h2>
      </div>
      <p>{post.tagline}</p>
    </div>
  ));

  return <div>{allPosts}</div>;
};
