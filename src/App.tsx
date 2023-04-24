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
    <div className='font-friends hacker:font-pixel dark:font-galaxy'>
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
