import { EmailSvg } from './EmailSvg';
import { GithubSvg } from './GithubSvg';
import { LinkedInSvg } from './LinkedInSvg';

export const Connect = () => (
  <ul className='flex flex-col gap-10 items-center mt-36 w-full'>
    <li>
      <a
        rel='noopener'
        target='_blank'
        href='mailto:brandenpalmer08@gmail.com'
        className='flex gap-2 items-center py-1 px-3 text-3xl font-bold bg-emerald-200 shadow duration-300 skew-x-3 dark:tracking-widest dark:text-purple-400 hover:py-1 hover:px-2 hover:text-pink-500 hover:bg-yellow-300 hover:shadow hover:skew-x-12 shadow-gray-500 hacker:skew-x-0 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-400 hover:hacker:skew-x-0 hover:hacker:border hover:hacker:border-green-500 hover:hacker:shadow-green-500 hover:dark:-skew-x-12 hover:dark:shadow-purple-400'
      >
        <EmailSvg className='w-8 h-full duration-300 fill-pink-500 hacker:fill-green-500 dark:fill-purple-400' />
        email
      </a>
    </li>
    <li>
      <a
        rel='noopener'
        target='_blank'
        href='https://github.com/palmerusaf'
        className='flex gap-2 items-center py-1 px-3 text-3xl font-bold bg-emerald-200 shadow duration-300 skew-x-3 dark:tracking-widest dark:text-purple-400 hover:py-1 hover:px-2 hover:text-pink-500 hover:bg-yellow-300 hover:shadow hover:skew-x-12 shadow-gray-500 hacker:skew-x-0 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-400 hover:hacker:skew-x-0 hover:hacker:border hover:hacker:border-green-500 hover:hacker:shadow-green-500 hover:dark:-skew-x-12 hover:dark:shadow-purple-400'
      >
        <GithubSvg className='w-8 h-full duration-300 fill-pink-500 hacker:fill-green-500 dark:fill-purple-400' />
        github
      </a>
    </li>
    <li>
      <a
        rel='noopener'
        target='_blank'
        href='https://linkedin.com/in/branden-palmer'
        className='flex gap-2 items-center py-1 px-3 text-3xl font-bold bg-emerald-200 shadow duration-300 skew-x-3 dark:tracking-widest dark:text-purple-400 hover:py-1 hover:px-2 hover:text-pink-500 hover:bg-yellow-300 hover:shadow hover:skew-x-12 shadow-gray-500 hacker:skew-x-0 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-400 hover:hacker:skew-x-0 hover:hacker:border hover:hacker:border-green-500 hover:hacker:shadow-green-500 hover:dark:-skew-x-12 hover:dark:shadow-purple-400'
      >
        <LinkedInSvg className='w-8 h-full duration-300 fill-pink-500 hacker:fill-green-500 dark:fill-purple-400' />
        LinkedIn
      </a>
    </li>
  </ul>
);
