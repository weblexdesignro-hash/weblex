import * as migration_20260923_192700_init from './20260923_192700_init';

export const migrations = [
  {
    up: migration_20260923_192700_init.up,
    down: migration_20260923_192700_init.down,
    name: '20260923_192700_init'
  },
];
