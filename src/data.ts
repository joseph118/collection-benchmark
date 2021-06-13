interface Map {
    [key: string]: string;
}

type List = string[];

export const createTestData = (collectionSize: number) => {
  const list: List = [];
  const map: Map = {};

  for (let idx = 0; idx < collectionSize; idx++) {
    const idxString = idx.toString();

    list.push(idxString);
    map[idxString] = idxString;
  }

  return {list, map};
};
