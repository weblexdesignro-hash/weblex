import * as migration_20260923_090824_init from './20260923_090824_init';
import * as migration_20260923_194230_add_pages_and_i18n from './20260923_194230_add_pages_and_i18n';
import * as migration_20260923_201608_add_page_texts from './20260923_201608_add_page_texts';
import * as migration_20261011_095133_add_site_settings_indexing from './20261011_095133_add_site_settings_indexing';
import * as migration_20261011_105505_add_service_icons from './20261011_105505_add_service_icons';
import * as migration_20261011_184226_add_contact_form_fields from './20261011_184226_add_contact_form_fields';

export const migrations = [
  {
    up: migration_20260923_090824_init.up,
    down: migration_20260923_090824_init.down,
    name: '20260923_090824_init',
  },
  {
    up: migration_20260923_194230_add_pages_and_i18n.up,
    down: migration_20260923_194230_add_pages_and_i18n.down,
    name: '20260923_194230_add_pages_and_i18n',
  },
  {
    up: migration_20260923_201608_add_page_texts.up,
    down: migration_20260923_201608_add_page_texts.down,
    name: '20260923_201608_add_page_texts',
  },
  {
    up: migration_20261011_095133_add_site_settings_indexing.up,
    down: migration_20261011_095133_add_site_settings_indexing.down,
    name: '20261011_095133_add_site_settings_indexing',
  },
  {
    up: migration_20261011_105505_add_service_icons.up,
    down: migration_20261011_105505_add_service_icons.down,
    name: '20261011_105505_add_service_icons',
  },
  {
    up: migration_20261011_184226_add_contact_form_fields.up,
    down: migration_20261011_184226_add_contact_form_fields.down,
    name: '20261011_184226_add_contact_form_fields'
  },
];
