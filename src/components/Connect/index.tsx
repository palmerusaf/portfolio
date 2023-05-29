import { BlogSvg } from './BlogSvg';
import { EmailSvg } from './EmailSvg';
import { GithubSvg } from './GithubSvg';
import { LinkedInSvg } from './LinkedInSvg';
import { ResumeSvg } from './ResumeSvg';

export const Connect = () => (
  <ul className='mt-28 flex w-full flex-col items-center gap-10'>
    <Link label='blog' svg={BlogSvg} href='https://blog.brandenpalmer.dev' />
    <Link
      href='mailto:brandenpalmer08@gmail.com'
      svg={EmailSvg}
      label='email'
    />
    <Link href='https://github.com/palmerusaf' label='github' svg={GithubSvg} />
    <Link
      label='resume'
      svg={ResumeSvg}
      href='https://github.com/palmerusaf/resume/raw/main/resume.pdf'
    />
    <Link
      href='https://linkedin.com/in/branden-palmer'
      label='LinkedIn'
      svg={LinkedInSvg}
    />
  </ul>
);

interface LinkProps {
  label: string;
  svg: ({ className }: { className: string }) => JSX.Element;
  href?: string;
}

function Link({ label, svg, href }: LinkProps) {
  return (
    <li>
      <a
        rel='noopener'
        target='_blank'
        href={href}
        className='flex skew-x-3 cursor-pointer items-center gap-2 bg-emerald-200 px-3 py-1 text-3xl font-bold shadow shadow-gray-500 duration-300 hover:skew-x-12 hover:bg-yellow-300 hover:px-2 hover:py-1 hover:text-pink-500 hover:shadow hacker:skew-x-0 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 hover:hacker:skew-x-0 hover:hacker:border hover:hacker:border-green-500 hover:hacker:shadow-green-500 dark:bg-slate-900 dark:tracking-widest dark:text-purple-400 dark:shadow-purple-400 hover:dark:-skew-x-12 hover:dark:shadow-purple-400'
      >
        {svg({
          className:
            'w-8 h-full duration-300 fill-pink-500 hacker:fill-green-500 dark:fill-purple-400',
        })}
        {label}
      </a>
    </li>
  );
}
