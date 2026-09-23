import * as migration_20260923_090824_init from './20260923_090824_init';

export const migrations = [
  {
    up: migration_20260923_090824_init.up,
    down: migration_20260923_090824_init.down,
    name: '20260923_090824_init'
  },
];
