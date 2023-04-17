import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className=''>
      <NavBar />
      <div
        id='home'
        className='flex justify-center items-center h-screen text-3xl'
      >
        Home
      </div>
      <div
        id='about'
        className='flex justify-center items-center h-screen text-3xl'
      >
        about
      </div>
      <div
        id='skills'
        className='flex justify-center items-center h-screen text-3xl'
      >
        skills
      </div>
      <div
        id='projects'
        className='flex justify-center items-center h-screen text-3xl'
      >
        projects
      </div>
      <div
        id='connect'
        className='flex justify-center items-center h-screen text-3xl'
      >
        connect
      </div>
    </div>
  );
}

export default App;
