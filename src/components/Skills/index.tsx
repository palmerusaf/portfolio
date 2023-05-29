import {
  FirebaseIcon,
  GitIcon,
  JestIcon,
  JSIcon,
  NextIcon,
  NPMIcon,
  ReactIcon,
  SassIcon,
  StorybookIcon,
  TailwindIcon,
  TSIcon,
  WebpackIcon,
} from './icons';

export const Skills = () => {
  return (
    <ul className='flex flex-wrap justify-center gap-2 md:mx-auto md:mt-36 md:max-w-xl'>
      <Skill label='Firebase' icon={FirebaseIcon} />
      <Skill label='Git' icon={GitIcon} />
      <Skill label='JavaScript' icon={JSIcon} />
      <Skill label='Jest' icon={JestIcon} />
      <Skill label='Next' icon={NextIcon} />
      <Skill label='NPM' icon={NPMIcon} />
      <Skill label='React' icon={ReactIcon} />
      <Skill label='Sass' icon={SassIcon} />
      <Skill label='Storybook' icon={StorybookIcon} />
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
    <li className='skew-x-3 bg-emerald-200 p-1 shadow-md shadow-gray-500 duration-300 hacker:skew-x-0 hacker:bg-black hacker:text-green-500 hacker:shadow-green-500 dark:-skew-x-3 dark:bg-slate-900 dark:text-purple-400 dark:shadow-purple-500'>
      <div className='flex h-24 w-24 justify-center p-2'>
        <img
          src={props.icon}
          className='duration-300 hacker:drop-shadow-green dark:drop-shadow-purple'
          alt={`${props.label} icon`}
        />
      </div>
      <div className='text-center font-bold hacker:text-[12px]'>
        {props.label}
      </div>
    </li>
  );
}
