import { Show } from "solid-js";
import "./card.css";

export type CardProps = {
  title?: string;
  subTitle?: string;
  body?: string;
  linkTo?: string;
};

enum CardClass {
  card = "card",
  cardTitle = "card-title",
  cardSubTitle = "card-subtitle",
  cardBody = "card-body",
}

export const Card = (props: CardProps) => {
  const { title, subTitle, body, linkTo } = props;

  return (
    <div class={CardClass.card}>
      <Show when={title}>
        <h1 class={CardClass.cardTitle}>
          <a href={linkTo}> {title}</a>
        </h1>
      </Show>
      <Show when={subTitle}>
        <h2 class={CardClass.cardSubTitle}>{subTitle}</h2>
      </Show>
      <Show when={body}>
        <p class={CardClass.cardBody}>{body}</p>
      </Show>
    </div>
  );
};
