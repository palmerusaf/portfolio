import { CodeSvg } from './Icons/Code';
import { PlaySvg } from './Icons/Play';
import { useIndexer } from './IndexHook';

export const Projects = () => {
  const array = ['1', '2', '3', '4', '5', '6'];
  const { index, nextIndex, prevIndex } = useIndexer(array.length);

  return (
    <div className='mx-2 mt-3 md:mx-auto md:mt-6 md:max-w-2xl'>
      {array[index]}
      <div className='grid grid-cols-2 gap-4'>
        <Link label='demo' svg={PlaySvg} />
        <Link label='code' svg={CodeSvg} />
      </div>
      <button onClick={nextIndex}>next</button>
      <button onClick={prevIndex}>prev</button>
    </div>
  );
};

interface LinkProps {
  label: string;
  svg: ({ className }: { className: string }) => JSX.Element;
  href?: string;
}

function Link({ label, svg, href }: LinkProps) {
  return (
    <a
      rel='noopener'
      target='_blank'
      href={href}
      className='flex gap-2 justify-evenly items-center py-1 px-2 text-xl font-bold text-center text-pink-500 bg-yellow-300 shadow duration-300 skew-x-12 cursor-pointer dark:tracking-widest dark:-skew-x-12 shadow-gray-500 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-400'
    >
      {svg({
        className:
          'w-8 h-full duration-300 fill-pink-500 hacker:fill-green-500 ',
      })}
      {label}
    </a>
  );
}
