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
      className='relative flex h-6 w-20 justify-center gap-1 rounded-full border-2 border-black duration-300 hacker:border-green-500 hacker:bg-black dark:border-white dark:bg-gray-700'
    >
      <span className='absolute z-50 -translate-x-full -translate-y-[2px] rounded-full bg-black p-3 duration-300 hacker:translate-x-full hacker:bg-green-500 dark:translate-x-0 dark:bg-white'></span>
      <Sun className='h-full duration-300 hacker:fill-green-500 dark:fill-white' />
      <Moon className='h-full duration-300 hacker:fill-green-500 dark:fill-white' />
      <Hoodie className='h-full duration-300 hacker:fill-green-500 dark:fill-white' />
    </button>
  );
}
