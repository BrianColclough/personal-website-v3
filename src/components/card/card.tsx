import { Show } from "solid-js";
import "./card.css";

export type CardProps = {
  title?: string;
  subTitle?: string;
  body?: string;
  linkTo?: string;
  tags?: string[];
};

enum CardClass {
  Card = "card",
  CardTitle = "card-title",
  CardSubTitle = "card-subtitle",
  CardBody = "card-body",
  CardTags = "card-tags",
}

export const Card = (props: CardProps) => {
  const { title, subTitle, body, linkTo, tags } = props;

  return (
    <div class={CardClass.Card}>
      <Show when={title}>
        <h1 class={[CardClass.CardTitle, "wubberly"].join(" ")}>
          <a href={linkTo}> {title}</a>
        </h1>
      </Show>
      <Show when={subTitle}>
        <i>
          <h2 class={[CardClass.CardSubTitle].join(" ")}>{subTitle}</h2>
        </i>
      </Show>
      <Show when={body}>
        <p class={CardClass.CardBody}>{body}</p>
      </Show>
      <Show when={tags}>
        <div class={CardClass.CardTags}>
          <sub class="tags-list">
            {tags?.map((tag) => (
              <>
                <strong>{tag}</strong>
                <span class="tag-separator">/</span>
              </>
            ))}
          </sub>
        </div>
      </Show>
    </div>
  );
};
