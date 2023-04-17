import { useRef } from 'react';
import { NavBar } from './components/NavBar';

function App() {
  const homeRef: any = useRef<HTMLDivElement>();
  const aboutRef: any = useRef<HTMLDivElement>();
  const skillsRef: any = useRef<HTMLDivElement>();
  const projectsRef: any = useRef<HTMLDivElement>();
  const connectRef: any = useRef<HTMLDivElement>();
  return (
    <div className=''>
      <NavBar refs={[homeRef, aboutRef, skillsRef, projectsRef, connectRef]} />
      <div
        ref={homeRef}
        id='home'
        className='flex justify-center items-center h-screen text-3xl'
      >
        Home
      </div>
      <div
        ref={aboutRef}
        id='about'
        className='flex justify-center items-center h-screen text-3xl'
      >
        about
      </div>
      <div
        ref={skillsRef}
        id='skills'
        className='flex justify-center items-center h-screen text-3xl'
      >
        skills
      </div>
      <div
        ref={projectsRef}
        id='projects'
        className='flex justify-center items-center h-screen text-3xl'
      >
        projects
      </div>
      <div
        ref={connectRef}
        id='connect'
        className='flex justify-center items-center h-screen text-3xl'
      >
        connect
      </div>
    </div>
  );
}

export default App;
