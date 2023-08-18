import { ReactNode, useEffect, useRef } from 'react';
import { Background } from './components/Background';
import { Connect } from './components/Connect';
import { NavBar } from './components/NavBar';
import { ProfilePic } from './components/ProfilePic';
import { Projects } from './components/Projects';
import { SectionHeader } from './components/SectionHeader';
import { Skills } from './components/Skills';

const Section = ({ pRef, children }: { pRef: any; children: ReactNode }) => (
  <div ref={pRef} className='h-screen pt-16 md:pt-20'>
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
    <div className='font-mono hacker:font-pixel'>
      <Background />
      <NavBar refs={[homeRef, skillsRef, projectsRef, connectRef, aboutRef]} />
      <Section pRef={homeRef}>
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <ProfilePic />
          <h2 className='-mt-2 skew-x-12 whitespace-nowrap bg-yellow-300 px-2 py-1 font-friends text-3xl text-pink-500 shadow shadow-gray-500 animate-in fade-in zoom-in-75 duration-700 hacker:-mt-4 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:font-pixel hacker:text-lg hacker:text-green-500 hacker:shadow-green-500 dark:-skew-x-12 dark:bg-inherit dark:bg-slate-900 dark:font-galaxy dark:text-4xl dark:shadow-purple-400'>
            Front-End Developer
          </h2>
        </div>
      </Section>
      <Section pRef={skillsRef}>
        <SectionHeader label='Skills' />
        <Skills />
      </Section>
      <Section pRef={projectsRef}>
        <SectionHeader label='Projects' />
        <Projects />
      </Section>
      <Section pRef={connectRef}>
        <SectionHeader label='Connect' />
        <Connect />
      </Section>
      <Section pRef={aboutRef}>
        <SectionHeader label='About' />
        <div className='-mt-20 flex h-full items-center px-4'>
          <div className='mx-auto flex max-w-xl skew-x-3 flex-col overflow-hidden bg-emerald-200 p-4 indent-6 font-bold shadow-lg shadow-gray-500 duration-300 hacker:skew-x-0 hacker:bg-black hacker:text-sm hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:-skew-x-3 dark:bg-slate-900 dark:text-purple-400 dark:shadow-purple-400 md:text-lg md:hacker:text-base'>
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
                className='-mt-2 mr-1 skew-x-12 whitespace-nowrap bg-yellow-300 px-2 text-pink-500 shadow shadow-gray-500 animate-in fade-in zoom-in-75 duration-700 hacker:-mt-4 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:text-green-500 hacker:underline hacker:shadow-green-500 dark:-skew-x-12 dark:bg-slate-900 dark:shadow-purple-400'
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
                className='-mt-2 mr-1 skew-x-12 whitespace-nowrap bg-yellow-300 px-2 text-pink-500 shadow shadow-gray-500 animate-in fade-in zoom-in-75 duration-700 hacker:-mt-4 hacker:skew-x-0 hacker:border hacker:border-green-500 hacker:bg-black hacker:text-green-500 hacker:underline hacker:shadow-green-500 dark:-skew-x-12 dark:bg-slate-900 dark:shadow-purple-400'
              >
                above.
              </button>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
export default App;
