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

const truncateText = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const Markup: FC<{ posts: Post[] }> = ({ posts }: { posts: Post[] }) => {
  const allPosts = posts.map((post) => (
    <div key={post.id}>
      <div class="flex">
        {post.votesCount > 0 && (
          <span class="votes_count">{post.votesCount}</span>
        )}
        <img
          src={post.thumbnailUrl}
          style={{ width: 28, height: 28 }}
          class="mr-4"
          alt={post.name}
        />
        <h2>{truncateText(post.name, 64)}</h2>
      </div>
      <p class="mt--4">{post.description}</p>
    </div>
  ));

  return (
    <>
      <div class="layout layout--col layout--stretch">{allPosts}</div>
      <div class="title_bar">
        <span class="title">oghunt.com launches today</span>
      </div>
    </>
  );
};
