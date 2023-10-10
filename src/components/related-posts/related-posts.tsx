import { Show } from "solid-js";

type RelatedPostsProps = {
  posts: Array<{ slug: string; data: { title: string } }>;
};

export const RelatedPosts = (props: RelatedPostsProps) => {
  const { posts } = props;

  return (
    <Show when={posts}>
      <h2>You might also like:</h2>
      <ul>
        {posts.map((p) => (
          <li>
            <a href={p.slug}>{p.data.title}</a>
          </li>
        ))}
      </ul>
    </Show>
  );
};
