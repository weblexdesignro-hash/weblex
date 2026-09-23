import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "page_texts_home_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "page_texts_home_benefits_locales" (
  	"title" varchar NOT NULL,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"stats_since" numeric DEFAULT 2017,
  	"stats_experience_years" numeric DEFAULT 10,
  	"stats_projects_delivered" numeric DEFAULT 400,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "page_texts_locales" (
  	"hero_heading" varchar,
  	"hero_heading_highlight" varchar,
  	"hero_subheading" varchar,
  	"hero_cta_primary_label" varchar DEFAULT 'Cere ofertă',
  	"hero_cta_secondary_label" varchar DEFAULT 'Vezi portofoliul',
  	"home_services_heading" varchar DEFAULT 'Tot ce ai nevoie pentru o prezență online solidă',
  	"home_portfolio_heading" varchar DEFAULT 'Proiecte reprezentative',
  	"home_benefits_heading" varchar DEFAULT 'Beneficii clare, fără promisiuni goale',
  	"home_benefits_text" varchar DEFAULT 'Fiecare proiect pleacă de la un obiectiv de business concret, nu doar de la un design frumos.',
  	"home_process_heading" varchar DEFAULT 'Cum lucrăm împreună',
  	"home_pricing_heading" varchar DEFAULT 'Site web de prezentare',
  	"despre_heading" varchar,
  	"despre_paragraph1" varchar,
  	"despre_paragraph2" varchar,
  	"despre_paragraph3" varchar,
  	"portofoliu_heading" varchar DEFAULT 'Proiecte livrate clienților noștri',
  	"portofoliu_subheading" varchar DEFAULT 'Peste 400 de proiecte finalizate — site-uri de prezentare, magazine online și redesign-uri complete.',
  	"contact_heading" varchar DEFAULT 'Hai să vorbim despre proiectul tău',
  	"contact_subheading" varchar DEFAULT 'Completează formularul și îți răspundem cu o ofertă personalizată în maximum o zi lucrătoare.',
  	"blog_heading" varchar DEFAULT 'Blog',
  	"blog_empty_message" varchar DEFAULT 'Niciun articol publicat încă.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "page_texts_home_benefits" ADD CONSTRAINT "page_texts_home_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_texts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_texts_home_benefits_locales" ADD CONSTRAINT "page_texts_home_benefits_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_texts_home_benefits"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_texts_locales" ADD CONSTRAINT "page_texts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_texts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "page_texts_home_benefits_order_idx" ON "page_texts_home_benefits" USING btree ("_order");
  CREATE INDEX "page_texts_home_benefits_parent_id_idx" ON "page_texts_home_benefits" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "page_texts_home_benefits_locales_locale_parent_id_unique" ON "page_texts_home_benefits_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "page_texts_locales_locale_parent_id_unique" ON "page_texts_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "page_texts_home_benefits" CASCADE;
  DROP TABLE "page_texts_home_benefits_locales" CASCADE;
  DROP TABLE "page_texts" CASCADE;
  DROP TABLE "page_texts_locales" CASCADE;`)
}
