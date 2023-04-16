import HoodieImg from './hoodie.svg';
import MoonImg from './moon.svg';
import SunImg from './sun.svg';

const Icon = (props: { src: string; alt: string }) => (
  <img
    src={props.src}
    alt={`${props.alt} icon`}
    className='duration-300 filter hacker:invert dark:invert'
  />
);

export function ThemeToggle() {
  let indexRef = 0;
  const themes = ['', 'dark', 'hacker'];
  const cycleTheme = () =>
    (document.body.className = themes[++indexRef % themes.length]);
  return (
    <button
      onClick={cycleTheme}
      className='flex relative gap-1 justify-center w-20 h-6 rounded-full border-2 border-black duration-300 dark:bg-gray-700 dark:border-white hacker:border-green-500 hacker:bg-black'
    >
      <span className='absolute z-50 p-3 bg-black rounded-full duration-300 -translate-x-full dark:bg-white dark:translate-x-0 -translate-y-[2px] hacker:translate-x-full hacker:bg-green-500'></span>
      <Icon src={SunImg} alt={'Sun'} />
      <Icon src={MoonImg} alt={'Moon'} />
      <Icon src={HoodieImg} alt={'Hoodie'} />
    </button>
  );
}
