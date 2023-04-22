import { Cross as Ham } from 'hamburger-react';
import { MutableRefObject, useEffect, useState } from 'react';
import { ThemeToggle } from '../ThemeToggle';

export const NavBar = ({ refs }: { refs: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex sticky top-0 z-10 justify-between items-center p-2 w-full bg-emerald-200 shadow-lg duration-300 md:p-6 dark:text-purple-400 shadow-gray-500 hacker:bg-black hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-500'>
      <h1 className='text-xl font-bold md:text-2xl font-friends hacker:font-glitch dark:font-astrospace'>
        Branden Palmer
      </h1>
      <ul
        className={`fixed right-0 top-0 flex h-full flex-col justify-center gap-4 bg-inherit px-8 text-center text-xl capitalize shadow-lg shadow-inherit duration-300 md:static md:ml-auto md:translate-x-0 md:flex-row md:shadow-none ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {['home', 'about', 'skills', 'projects', 'connect'].map(
          (item, index) => {
            const onScreen = useOnScreen(refs[index]);
            return (
              <li key={index}>
                <button
                  className={`duration-300 hacker:text-sm ${onScreen
                      ? 'skew-x-12 bg-yellow-300 px-2 py-1 text-pink-500 shadow hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-inherit hacker:text-inherit hacker:shadow-green-500 dark:-skew-x-12 dark:bg-inherit dark:shadow-purple-500'
                      : ''
                    }`}
                  onClick={() => {
                    setIsOpen(false);
                    refs[index].current.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </button>
              </li>
            );
          }
        )}
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

// Hook
function useOnScreen<T extends Element>(ref: MutableRefObject<T>): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.75,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
