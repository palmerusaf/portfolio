import {
  FirebaseIcon,
  GitIcon,
  JestIcon,
  JSIcon,
  NextIcon,
  NPMIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TSIcon,
  WebpackIcon,
} from './icons';

export const Skills = () => {
  return (
    <ul className='flex flex-wrap gap-2 justify-center md:mx-auto md:mt-3 md:max-w-xl'>
      <Skill label='Firebase' icon={FirebaseIcon} />
      <Skill label='Git' icon={GitIcon} />
      <Skill label='JavaScript' icon={JSIcon} />
      <Skill label='Jest' icon={JestIcon} />
      <Skill label='Next' icon={NextIcon} />
      <Skill label='NPM' icon={NPMIcon} />
      <Skill label='React' icon={ReactIcon} />
      <Skill label='Sass' icon={SassIcon} />
      <Skill label='TailwindCSS' icon={TailwindIcon} />
      <Skill label='TypeScript' icon={TSIcon} />
      <Skill label='Webpack' icon={WebpackIcon} />
    </ul>
  );
};

interface SkillProps {
  label: string;
  icon: string;
}

function Skill(props: SkillProps) {
  return (
    <li className='p-1 bg-emerald-200 rounded-md shadow-md duration-300 dark:text-purple-400 shadow-gray-500 hacker:bg-black hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-500'>
      <div className='flex justify-center p-2 w-24 h-24'>
        <img
          src={props.icon}
          className='duration-300 hacker:drop-shadow-green dark:drop-shadow-purple'
          alt={`${props.label} icon`}
        />
      </div>
      <div className='font-bold text-center hacker:text-[12px]'>
        {props.label}
      </div>
    </li>
  );
}
