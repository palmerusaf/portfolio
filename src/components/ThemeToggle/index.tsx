import { useRef } from 'react';
import Hoodie from './hoodie';
import Moon from './moon';
import Sun from './sun';

export function ThemeToggle() {
  let indexRef = useRef(0);
  const themes = ['', 'dark', 'hacker'];
  const cycleTheme = () =>
    (document.body.className = themes[++indexRef.current % themes.length]);
  return (
    <button
      onClick={cycleTheme}
      className='relative flex h-6 w-20 justify-center gap-1 rounded-full border-2 border-pink-500 bg-yellow-300 duration-300 hacker:border-green-500 hacker:bg-black dark:border-purple-400 dark:bg-black'
    >
      <span className='absolute z-50 -translate-x-full -translate-y-[2px] rounded-full bg-pink-500 p-3 duration-300 hacker:translate-x-full hacker:bg-green-500 dark:translate-x-0 dark:bg-purple-400'></span>
      <Sun className='h-full fill-pink-500 duration-300 hacker:fill-green-500 dark:fill-purple-400' />
      <Moon className='h-full fill-pink-500 duration-300 hacker:fill-green-500 dark:fill-purple-400' />
      <Hoodie className='h-full fill-pink-500 duration-300 hacker:fill-green-500 dark:fill-purple-400' />
    </button>
  );
}
