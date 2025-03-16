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
      <img src={post.thumbnailUrl} alt={post.name} />
      <h2>{post.name}</h2>
      <p>{post.tagline}</p>
      <p>{post.description}</p>
    </div>
  ));

  return <div>{allPosts}</div>;
};
