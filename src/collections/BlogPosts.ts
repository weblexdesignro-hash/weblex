import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { AIGenerateTextField, AIGenerateImageField } from "../components/admin/afterInput";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: { useAsTitle: "title", group: "Blog" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, localized: true, ...AIGenerateTextField("titlul articolului de blog") },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      admin: AIGenerateImageField("imagine de copertă pentru un articol de blog despre web design/marketing").admin,
    },
    {
      name: "excerpt",
      type: "textarea",
      localized: true,
      ...AIGenerateTextField("rezumatul scurt (excerpt) al articolului"),
    },
    { name: "content", type: "richText", editor: lexicalEditor(), localized: true },
    { name: "publishedAt", type: "date" },
    { name: "author", type: "text", defaultValue: "Weblex Design" },
    { name: "seoTitle", type: "text", localized: true, ...AIGenerateTextField("titlul SEO (max 60 caractere)") },
    {
      name: "seoDescription",
      type: "textarea",
      localized: true,
      ...AIGenerateTextField("descrierea SEO (max 160 caractere)"),
    },
  ],
};
