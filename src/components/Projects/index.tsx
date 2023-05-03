import { useState } from 'react';
import { DATA } from './Data';
import { CodeSvg } from './Icons/Code';
import { PlaySvg } from './Icons/Play';
import { useIndexer } from './IndexHook';

export const Projects = () => {
  const { index, nextIndex, prevIndex } = useIndexer(DATA.length);
  const { title, repoUrl, demoUrl, desc, vid, techUsed } = DATA[index];
  return (
    <div
      key={index}
      className='flex flex-col justify-between p-4 mx-4 mt-6 bg-emerald-200 shadow-lg duration-300 skew-x-2 md:p-6 md:mx-auto md:max-w-xl md:text-lg dark:text-purple-400 dark:-skew-x-2 h-[550px] shadow-gray-500 animate-in fade-in hacker:skew-x-0 hacker:bg-black hacker:text-green-500 hacker:shadow-green-500 md:h-[680px] dark:bg-slate-900 dark:shadow-purple-400'
    >
      <div>
        <h1 className='mb-2 w-full text-xl font-bold text-center md:text-2xl dark:text-purple-400 font-friends hacker:font-pixel dark:font-astrospace'>
          {title}
        </h1>
        <p className='text-center dark:tracking-widest'>{desc}</p>
      </div>
      <div className='grid grid-cols-2 gap-4 m-3 md:gap-6 dark:tracking-widest'>
        <div className='flex flex-col justify-between'>
          <div>
            <div className='text-xl font-bold text-center underline md:text-2xl dark:font-normal hacker:text-base dark:tracking-[0.2em]'>
              Tech Used
            </div>
            <ul className='list-disc list-inside whitespace-nowrap'>
              {techUsed.sort().map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className='grid grid-rows-2 gap-4 mt-4 md:grid-cols-2 md:grid-rows-none md:justify-end'>
            <Link label='code' svg={CodeSvg} href={repoUrl} />
            <Link label='demo' svg={PlaySvg} href={demoUrl} />
          </div>
        </div>
        <a rel='noopener' target='_blank' href={demoUrl}>
          <VideoWithLoad src={vid} />
        </a>
      </div>
      <div className='grid grid-cols-2 gap-4 md:mt-6'>
        <Button onClick={prevIndex} label='prev' />
        <Button onClick={nextIndex} label='next' />
      </div>
    </div>
  );
};

function VideoWithLoad({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className='relative h-full'>
      <div
        className={`absolute flex h-full w-full flex-col items-center justify-center gap-2 ${loaded ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <div className='w-12 h-12 rounded-full border-2 border-transparent animate-spin border-x-pink-500 hacker:border-x-green-500 dark:border-x-purple-400' />
        <div className='font-bold animate-pulse'>Loading...</div>
      </div>
      <video
        src={src}
        muted
        autoPlay
        onPlay={() => {
          setLoaded(true);
        }}
        loop
        className={`h-full object-cover shadow-md shadow-slate-500 hacker:shadow-green-500 dark:shadow-purple-400 ${loaded ? 'opacity-100' : 'opacity-0'
          }`}
      ></video>
    </div>
  );
}

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
      className='flex justify-evenly items-center py-1 px-2 text-xl font-bold text-center text-pink-500 bg-yellow-300 shadow duration-300 skew-x-12 cursor-pointer dark:tracking-widest dark:-skew-x-12 shadow-gray-500 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-400'
    >
      {svg({
        className:
          'w-8 h-full duration-300 fill-pink-500 hacker:fill-green-500 ',
      })}
      {label}
    </a>
  );
}

function Button({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      className='flex gap-2 justify-evenly items-center py-1 px-2 text-xl font-bold text-center text-pink-500 bg-yellow-300 shadow duration-300 skew-x-12 cursor-pointer dark:tracking-widest dark:-skew-x-12 shadow-gray-500 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-400'
      onClick={onClick}
    >
      {label}
    </button>
  );
}
