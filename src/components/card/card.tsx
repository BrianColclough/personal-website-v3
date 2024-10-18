import { Show } from "solid-js";
import "./card.css";
import type { EntryFieldTypes } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export type CardProps = {
    title: string;
    body: string;
    subTitle: string;
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
                    <a href={linkTo}>{title.toString()}</a>
                </h1>
            </Show>
            <Show when={subTitle}>
                <i>
                    <time class={CardClass.CardSubTitle}>{subTitle}</time>
                </i>
            </Show>
            <Show when={body}>
                <article class={CardClass.CardBody}>{body}</article>
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
