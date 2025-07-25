import type { EntryFieldTypes } from 'contentful';
import * as contentful from 'contentful';

export interface BlogEntryRO {
    contentTypeId: "blogPost",
    fields: {
        title: EntryFieldTypes.Text,
        content: EntryFieldTypes.RichText,
        datePosted: EntryFieldTypes.Date,
        summary: EntryFieldTypes.Text,
        slug: EntryFieldTypes.Text
    }
};

export interface ImagesRO {
    contentTypeId: "spotlightImages",
    fields: {
        images: EntryFieldTypes.AssetLink[];
    }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
} as contentful.CreateClientParams);
