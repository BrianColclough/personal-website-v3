import { Show } from "solid-js";

import styles from "./related-posts.module.css";

type RelatedPostsProps = {
  posts: Array<{ slug: string; data: { title: string } }>;
};

export const RelatedPosts = (props: RelatedPostsProps) => {
  const { posts } = props;

  return (
    <Show when={posts}>
      <h2 class={styles.header}>You might also like:</h2>
      <ul class={styles.list}>
        {posts.map((p) => (
          <li class={styles.listItem}>
            <a class={styles.link} href={p.slug}>
              {p.data.title}
            </a>
          </li>
        ))}
      </ul>
    </Show>
  );
};
