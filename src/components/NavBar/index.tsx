import { Cross as Ham } from 'hamburger-react';
import { useState } from 'react';
import { ThemeToggle } from '../ThemeToggle';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex sticky top-0 justify-between items-center p-2 w-full bg-white duration-300 md:p-6 dark:text-white dark:bg-gray-700 hacker:bg-black hacker:text-green-500'>
      <h1 className='text-xl font-bold md:text-2xl'>Branden Palmer</h1>
      <ul
        className={`fixed right-0 top-0 flex h-full flex-col justify-center gap-4 bg-white px-8 text-center text-xl capitalize duration-300 hacker:bg-black hacker:text-green-500 dark:bg-gray-700 dark:text-white md:static md:ml-auto md:translate-x-0 md:flex-row ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {['home', 'about', 'skills', 'projects', 'connect'].map((item) => {
          const href = '#' + item;
          return (
            <li>
              <a onClick={() => setIsOpen(false)} href={href}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='flex items-center'>
        <span className='md:hidden'>
          <Ham toggled={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </span>
        <ThemeToggle />
      </div>
    </nav>
  );
};
