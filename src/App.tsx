import { ReactNode, useEffect, useRef } from 'react';
import { Background } from './components/Background';
import { NavBar } from './components/NavBar';
import { ProfilePic } from './components/ProfilePic';
import { SectionHeader } from './components/SectionHeader';

const Section = ({ pRef, children }: { pRef: any; children: ReactNode }) => (
  <div ref={pRef} className='pt-16 h-screen md:pt-20'>
    {children}
  </div>
);

function App() {
  const homeRef: any = useRef<HTMLDivElement>();
  const aboutRef: any = useRef<HTMLDivElement>();
  const skillsRef: any = useRef<HTMLDivElement>();
  const projectsRef: any = useRef<HTMLDivElement>();
  const connectRef: any = useRef<HTMLDivElement>();

  useEffect(() => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className='hacker:font-pixel dark:font-galaxy'>
      <Background />
      <NavBar refs={[homeRef, aboutRef, skillsRef, projectsRef, connectRef]} />
      <Section pRef={homeRef}>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <ProfilePic />
          <h2 className='py-1 px-2 -mt-2 text-3xl text-pink-500 whitespace-nowrap bg-yellow-300 shadow duration-700 skew-x-12 dark:text-4xl dark:-skew-x-12 font-friends shadow-gray-500 animate-in fade-in zoom-in-75 hacker:-mt-4 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:font-pixel hacker:text-lg hacker:text-green-500 hacker:shadow-green-500 dark:bg-inherit dark:bg-slate-900 dark:font-galaxy dark:shadow-purple-500'>
            Front-End Developer
          </h2>
        </div>
      </Section>
      <Section pRef={aboutRef}>
        <SectionHeader label='About' />
        <div className='flex px-4 mt-2'>
          <div className='flex overflow-hidden flex-col p-4 mx-auto max-w-xl font-sans font-bold bg-emerald-200 shadow-lg duration-300 skew-x-3 md:text-lg dark:tracking-widest dark:text-purple-400 indent-4 shadow-gray-500 hacker:skew-x-0 hacker:bg-black hacker:text-sm hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 md:hacker:text-base dark:bg-slate-900 dark:shadow-purple-500'>
            <p>
              Hello there, I'm Branden. I'm a front-end developer/Air Force
              veteran from the USA. Honestly though, I'm just a big nerd.
            </p>
            <p>
              {' '}
              I love building stuff, taking things apart, and learning how they
              work. I'm always looking for new challenges to grow as a person
              and developer. If that sounds like someone you'd like to have on
              your team click{' '}
              <button
                onClick={() =>
                  connectRef.current.scrollIntoView({ behavior: 'smooth' })
                }
                className='px-2 mr-1 -mt-2 text-pink-500 whitespace-nowrap bg-yellow-300 shadow duration-700 skew-x-12 dark:-skew-x-12 shadow-gray-500 animate-in fade-in zoom-in-75 hacker:-mt-4 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:text-green-500 hacker:underline hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-500'
              >
                {' '}
                here
              </button>
              to connect.
            </p>
            <p>
              Also, while you're here check out some of my projects{' '}
              <button
                onClick={() =>
                  projectsRef.current.scrollIntoView({ behavior: 'smooth' })
                }
                className='px-2 mr-1 -mt-2 text-pink-500 whitespace-nowrap bg-yellow-300 shadow duration-700 skew-x-12 dark:-skew-x-12 shadow-gray-500 animate-in fade-in zoom-in-75 hacker:-mt-4 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:text-green-500 hacker:underline hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-500'
              >
                below.
              </button>
            </p>
          </div>
        </div>
      </Section>
      <Section pRef={skillsRef}>
        <SectionHeader label='Skills' />
      </Section>
      <Section pRef={projectsRef}>
        <SectionHeader label='Projects' />
      </Section>
      <Section pRef={connectRef}>
        <SectionHeader label='Connect' />
      </Section>
    </div>
  );
}

export default App;
