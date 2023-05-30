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
      className='mx-4 mt-3 flex h-[calc(100%-8rem)] skew-x-2 flex-col justify-between bg-emerald-200 p-4 shadow-lg shadow-gray-500 animate-in fade-in duration-300 hacker:skew-x-0 hacker:bg-black hacker:text-green-500 hacker:shadow-green-500 dark:-skew-x-2 dark:bg-slate-900 dark:text-purple-400 dark:shadow-purple-400 md:mx-auto md:h-[680px] md:max-w-xl md:p-6 md:text-lg'
    >
      <div>
        <h1 className='mb-2 w-full text-center font-friends text-xl font-bold hacker:font-pixel dark:font-astrospace dark:text-purple-400 md:text-2xl'>
          {title}
        </h1>
        <p className='text-center'>{desc}</p>
      </div>
      <div className='m-3 grid grid-cols-2 gap-4 md:gap-6'>
        <div className='flex flex-col justify-between'>
          <div>
            <div className='text-center text-xl font-bold underline hacker:text-base dark:font-normal dark:tracking-[0.2em] md:text-2xl'>
              Tech Used
            </div>
            <ul className='list-inside list-disc whitespace-nowrap'>
              {techUsed.sort().map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className='mt-4 grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-none md:justify-end'>
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
    <div className='relative flex h-full items-center'>
      <div
        className={`absolute flex h-full w-full flex-col items-center justify-center gap-2 ${loaded ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <div className='h-12 w-12 animate-spin rounded-full border-2 border-transparent border-x-pink-500 hacker:border-x-green-500 dark:border-x-purple-400' />
        <div className='animate-pulse font-bold'>Loading...</div>
      </div>
      <video
        src={src}
        muted
        autoPlay
        onPlay={() => {
          setLoaded(true);
        }}
        loop
        className={`mx-auto h-auto object-cover shadow-md shadow-slate-500 hacker:shadow-green-500 dark:shadow-purple-400 ${loaded ? 'opacity-100' : 'opacity-0'
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
      className='flex skew-x-12 cursor-pointer items-center justify-evenly bg-yellow-300 px-2 py-1 text-center text-xl font-bold text-pink-500 shadow shadow-gray-500 duration-300 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:-skew-x-12 dark:bg-slate-900 dark:font-galaxy dark:shadow-purple-400'
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
      className='flex skew-x-12 cursor-pointer items-center justify-evenly gap-2 bg-yellow-300 px-2 py-1 text-center text-xl font-bold text-pink-500 shadow shadow-gray-500 duration-300 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:-skew-x-12 dark:bg-slate-900 dark:font-galaxy dark:tracking-widest dark:shadow-purple-400'
      onClick={onClick}
    >
      {label}
    </button>
  );
}
