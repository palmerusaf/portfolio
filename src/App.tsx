import { ReactNode, useRef } from 'react';
import { Background } from './components/Background';
import { NavBar } from './components/NavBar';
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
  return (
    <div className='font-friends hacker:font-pixel dark:font-galaxy'>
      <Background />
      <NavBar refs={[homeRef, aboutRef, skillsRef, projectsRef, connectRef]} />
      <Section pRef={homeRef}>
        <img src='./components/profile-pic.jpeg' alt='profile pic' />
        <h1>Branden Palmer</h1>
        <h2>Front-End Developer</h2>
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
