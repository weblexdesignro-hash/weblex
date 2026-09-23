import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: { useAsTitle: "title", group: "Blog" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "coverImage", type: "upload", relationTo: "media" },
    { name: "excerpt", type: "textarea" },
    { name: "content", type: "richText", editor: lexicalEditor() },
    { name: "publishedAt", type: "date" },
    { name: "author", type: "text", defaultValue: "Weblex Design" },
    { name: "seoTitle", type: "text" },
    { name: "seoDescription", type: "textarea" },
  ],
};
