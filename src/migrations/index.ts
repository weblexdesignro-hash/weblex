import * as migration_20260923_090824_init from './20260923_090824_init';
import * as migration_20260923_194230_add_pages_and_i18n from './20260923_194230_add_pages_and_i18n';

export const migrations = [
  {
    up: migration_20260923_090824_init.up,
    down: migration_20260923_090824_init.down,
    name: '20260923_090824_init',
  },
  {
    up: migration_20260923_194230_add_pages_and_i18n.up,
    down: migration_20260923_194230_add_pages_and_i18n.down,
    name: '20260923_194230_add_pages_and_i18n'
  },
];
