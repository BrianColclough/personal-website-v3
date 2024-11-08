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
        <div class="border-2 border-white transition-transform duration-300 hover:scale-105 subpixel-antialiased">
            <div class="m-8">
                <Show when={title}>
                    <h1 class="wubberly hover:text-orange-400 transition-colors text-white text-5xl mb-2">
                        <a href={linkTo}>{title}</a>
                    </h1>
                </Show>
                <Show when={subTitle}>
                    <i>
                        <time class="font-wotfard text-neutral-400">{subTitle}</time>
                    </i>
                </Show>
                <Show when={body}>
                    <article class="font-wotfard text-neutral-300">{body}</article>
                </Show>
            </div>
        </div>
    );
};
