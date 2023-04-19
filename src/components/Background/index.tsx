import DarkBg from './dark-sm.jpg';
import DarkBgMd from './dark.jpg';
import LightBg from './light.jpg';
export const Background = () => (
  <div className='fixed left-0 top-16 w-screen h-screen md:top-20 -z-10'>
    <div
      className='absolute top-0 left-0 w-full h-full duration-300 dark:opacity-0 hacker:opacity-0'
      style={{ backgroundImage: `url(${LightBg})` }}
    ></div>
    <div
      className='absolute top-0 left-0 w-full h-full bg-cover opacity-0 duration-300 md:hidden md:bg-cover dark:opacity-100'
      style={{ backgroundImage: `url(${DarkBg})` }}
    ></div>
    <div
      className='hidden absolute top-0 left-0 w-full h-full bg-contain opacity-0 duration-300 md:block md:bg-cover dark:opacity-100'
      style={{ backgroundImage: `url(${DarkBgMd})` }}
    ></div>
    <div className='absolute top-0 left-0 w-full h-full duration-300 hacker:bg-black'></div>
  </div>
);
