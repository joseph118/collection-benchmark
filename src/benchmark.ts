import {performance} from 'perf_hooks';

import {createTestData} from './data';

function getTimeInString(msTime: number): string {
  return `${(msTime / 1000).toFixed(3)} seconds or ${msTime} milliseconds`;
}

export function benchmark(collectionSize: number) {
  const testData = createTestData(collectionSize);

  const firstElement = testData.list[0];
  const lastElement = testData.list[testData.list.length];

  let timer = -performance.now();
  testData.list.includes(firstElement);
  timer += performance.now();
  console.error(`Array first element: ${getTimeInString(timer)}.`);

  timer = -performance.now();
  testData.list.includes(lastElement);
  timer += performance.now();
  console.error(`Array last element: ${getTimeInString(timer)}.`);

  timer = -performance.now();
  testData.map[firstElement];
  timer += performance.now();
  console.error(`Map first element: ${getTimeInString(timer)}.`);

  timer = -performance.now();
  testData.map[lastElement];
  timer += performance.now();
  console.error(`Map last element: ${getTimeInString(timer)}.`);
}
