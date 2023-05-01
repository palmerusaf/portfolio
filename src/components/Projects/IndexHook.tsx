import { useState } from 'react';

export function useIndexer(length: number) {
  const [index, setIndex] = useState(0);
  const nextIndex = () => setIndex((index + 1) % length);
  const prevIndex = () =>
    index !== 0 ? setIndex(index - 1) : setIndex(length - 1);
  return { index, prevIndex, nextIndex };
}
