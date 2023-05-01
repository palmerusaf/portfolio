import { useIndexer } from './IndexHook';

export const Projects = () => {
  const array = ['1', '2', '3', '4', '5', '6'];
  const { index, nextIndex, prevIndex } = useIndexer(array.length);

  return (
    <div className='mx-2 mt-3 md:mx-auto md:mt-6 md:max-w-2xl'>
      {array[index]}
      <button onClick={nextIndex}>next</button>
      <button onClick={prevIndex}>prev</button>
    </div>
  );
};
