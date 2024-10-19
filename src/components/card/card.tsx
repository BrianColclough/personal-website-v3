import { Show } from "solid-js";

export type CardProps = {
    title: string;
    body: string;
    subTitle: string;
    linkTo?: string;
};

export const Card = (props: CardProps) => {
    const { title, subTitle, body, linkTo } = props;

    return (
        <div class="rounded-lg bg-navy-950 ">
            <div class="m-8">
                <Show when={title}>
                    <h1 class="wubberly text-navy-200 text-5xl mb-2">
                        <a href={linkTo}>{title}</a>
                    </h1>
                </Show>
                <Show when={subTitle}>
                    <i>
                        <time class="font-wotfard text-red-500">{subTitle}</time>
                    </i>
                </Show>
                <Show when={body}>
                    <article class="font-wotfard">{body}</article>
                </Show>
            </div>
        </div>
    );
};
