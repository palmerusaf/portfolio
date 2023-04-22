import Hoodie from './hoodie';
import Moon from './moon';
import Sun from './sun';

export function ThemeToggle() {
  let indexRef = 0;
  const themes = ['', 'dark', 'hacker'];
  const cycleTheme = () =>
    (document.body.className = themes[++indexRef % themes.length]);
  return (
    <button
      onClick={cycleTheme}
      className='flex relative gap-1 justify-center w-20 h-6 bg-yellow-300 rounded-full border-2 border-pink-500 duration-300 dark:bg-black dark:border-purple-500 hacker:border-green-500 hacker:bg-black'
    >
      <span className='absolute z-50 p-3 bg-pink-500 rounded-full duration-300 -translate-x-full dark:bg-purple-500 dark:translate-x-0 -translate-y-[2px] hacker:translate-x-full hacker:bg-green-500'></span>
      <Sun className='h-full duration-300 fill-pink-500 hacker:fill-green-500 dark:fill-purple-500' />
      <Moon className='h-full duration-300 fill-pink-500 hacker:fill-green-500 dark:fill-purple-500' />
      <Hoodie className='h-full duration-300 fill-pink-500 hacker:fill-green-500 dark:fill-purple-500' />
    </button>
  );
}
