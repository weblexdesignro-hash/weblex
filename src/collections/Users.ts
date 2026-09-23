import type { CollectionConfig } from "payload";

// Contul/conturile de administrare — te loghezi la /admin cu email + parolă.
// Primul cont se creează automat la prima accesare a /admin (ecranul de "Create first user").
export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
