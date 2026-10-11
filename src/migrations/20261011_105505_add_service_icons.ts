import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_services_icon" ADD VALUE 'rocket';
  ALTER TYPE "public"."enum_services_icon" ADD VALUE 'code';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "services" ALTER COLUMN "icon" SET DEFAULT 'globe'::text;
  DROP TYPE "public"."enum_services_icon";
  CREATE TYPE "public"."enum_services_icon" AS ENUM('globe', 'cart', 'search', 'megaphone', 'wrench', 'camera', 'refresh');
  ALTER TABLE "services" ALTER COLUMN "icon" SET DEFAULT 'globe'::"public"."enum_services_icon";
  ALTER TABLE "services" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_services_icon" USING "icon"::"public"."enum_services_icon";`)
}
