import BattleshipVid from './battle-ship.mp4';
import MemespaceVid from './memespace.mp4';
import PortfolioVid from './portfolio.mp4';

export interface DataProps {
  title: string;
  repoUrl: string;
  demoUrl: string;
  desc: string;
  vid: string;
  techUsed: string[];
}

export const DATA: DataProps[] = [
  {
    title: 'MemeSpace',
    demoUrl: 'https://memespace.vercel.app/',
    desc: 'A social media app exclusively for memes.',
    techUsed: [
      'Jest',
      'Next',
      'React',
      'Firebase',
      'TypeScript',
      'TailwindCSS',
      'Storybook',
    ],
    repoUrl: 'https://github.com/palmerusaf/memespace',
    vid: MemespaceVid,
  },
  {
    title: 'Battle Ship',
    demoUrl: 'https://palmerusaf.github.io/battle-ship',
    desc: 'A re-creation of the classic board game using test driven development.',
    techUsed: ['Webpack', 'Sass', 'Jest', 'JavaScript'],
    repoUrl: 'https://github.com/palmerusaf/battle-ship',
    vid: BattleshipVid,
  },
  {
    title: 'Portfolio',
    demoUrl: 'https://brandenpalmer.dev',
    desc: 'My personal portfolio built  using React and Tailwind.',
    techUsed: ['Vite', 'TypeScript', 'React', 'TailwindCSS'],
    repoUrl: 'https://github.com/palmerusaf/portfolio',
    vid: PortfolioVid,
  },
];
