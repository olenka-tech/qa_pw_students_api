import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as goodsAPITest } from './fixturesGoodsAPI';
import { test as todosAPITest } from './fixturesTodosApi';
import { test as baseAPITest } from './fixturesBaseAPI';

export const test = mergeTests(
  genericTest,
  goodsAPITest,
  todosAPITest,
  baseAPITest,
);

export { expect } from '@playwright/test';
