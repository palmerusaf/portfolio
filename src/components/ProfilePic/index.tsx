import DarkPic from './dark.png';
import HackerPic from './hacker.png';
import LightPic from './light.png';

export const ProfilePic = () => {
  return (
    <div className='relative w-64 h-64 duration-700 animate-in fade-in zoom-in-75'>
      <img
        className='absolute dark:opacity-0 hacker:opacity-0'
        src={LightPic}
        alt='Light Pic'
      />
      <img
        className='absolute opacity-0 dark:opacity-100'
        src={DarkPic}
        alt='Dark Pic'
      />
      <img
        className='absolute opacity-0 hacker:opacity-100'
        src={HackerPic}
        alt='Hacker Pic'
      />
    </div>
  );
};
