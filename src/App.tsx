import { ReactNode, useRef } from 'react';
import { Background } from './components/Background';
import { NavBar } from './components/NavBar';

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
    <div className='font-hippie hacker:font-pixel dark:font-galaxy'>
      <Background />
      <NavBar refs={[homeRef, aboutRef, skillsRef, projectsRef, connectRef]} />
      <Section pRef={homeRef}>
        <img src='./components/profile-pic.jpeg' alt='profile pic' />
        <h1>Branden Palmer</h1>
        <h2>Front-End Developer</h2>
      </Section>
      <Section pRef={aboutRef}>about</Section>
      <Section pRef={skillsRef}>skills</Section>
      <Section pRef={projectsRef}>projects</Section>
      <Section pRef={connectRef}>connect</Section>
    </div>
  );
}

export default App;
