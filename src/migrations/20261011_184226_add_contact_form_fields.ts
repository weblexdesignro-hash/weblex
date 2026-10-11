import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contact_messages_service_type" AS ENUM('site-web', 'magazin-online', 'redesign', 'crm', 'aplicatie-custom', 'mentenanta', 'seo', 'altul');
  ALTER TABLE "contact_messages_services" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "contact_messages_services" CASCADE;
  ALTER TABLE "contact_messages" ALTER COLUMN "message" DROP NOT NULL;
  ALTER TABLE "contact_messages" ADD COLUMN "cui" varchar;
  ALTER TABLE "contact_messages" ADD COLUMN "service_type" "enum_contact_messages_service_type";
  ALTER TABLE "contact_messages" ADD COLUMN "site_url" varchar;
  -- Mesajele vechi (trimise inainte de formularul nou) nu au cum sa aiba CUI, companie sau
  -- serviciu selectat in noul format — le completam cu o valoare implicita, ca sa putem
  -- face coloanele obligatorii pentru mesajele noi fara sa stricam randurile existente.
  UPDATE "contact_messages" SET "cui" = 'N/A (mesaj vechi)' WHERE "cui" IS NULL;
  UPDATE "contact_messages" SET "service_type" = 'altul' WHERE "service_type" IS NULL;
  UPDATE "contact_messages" SET "company" = 'N/A (mesaj vechi)' WHERE "company" IS NULL;
  ALTER TABLE "contact_messages" ALTER COLUMN "cui" SET NOT NULL;
  ALTER TABLE "contact_messages" ALTER COLUMN "service_type" SET NOT NULL;
  ALTER TABLE "contact_messages" ALTER COLUMN "company" SET NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "contact_messages_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  ALTER TABLE "contact_messages" ALTER COLUMN "company" DROP NOT NULL;
  ALTER TABLE "contact_messages" ALTER COLUMN "message" SET NOT NULL;
  ALTER TABLE "contact_messages_services" ADD CONSTRAINT "contact_messages_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_messages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "contact_messages_services_order_idx" ON "contact_messages_services" USING btree ("_order");
  CREATE INDEX "contact_messages_services_parent_id_idx" ON "contact_messages_services" USING btree ("_parent_id");
  ALTER TABLE "contact_messages" DROP COLUMN "cui";
  ALTER TABLE "contact_messages" DROP COLUMN "service_type";
  ALTER TABLE "contact_messages" DROP COLUMN "site_url";
  DROP TYPE "public"."enum_contact_messages_service_type";`)
}
