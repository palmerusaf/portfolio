import { EmailSvg } from './EmailSvg';
import { GithubSvg } from './GithubSvg';
import { LinkedInSvg } from './LinkedInSvg';
import { ResumeSvg } from './ResumeSvg';

export const Connect = () => (
  <ul className='flex flex-col gap-10 items-center mt-36 w-full'>
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
        className='flex gap-2 items-center py-1 px-3 text-3xl font-bold bg-emerald-200 shadow duration-300 skew-x-3 cursor-pointer dark:tracking-widest dark:text-purple-400 hover:py-1 hover:px-2 hover:text-pink-500 hover:bg-yellow-300 hover:shadow hover:skew-x-12 shadow-gray-500 hacker:skew-x-0 hacker:bg-black hacker:tracking-normal hacker:text-green-500 hacker:shadow-green-500 dark:bg-slate-900 dark:shadow-purple-400 hover:hacker:skew-x-0 hover:hacker:border hover:hacker:border-green-500 hover:hacker:shadow-green-500 hover:dark:-skew-x-12 hover:dark:shadow-purple-400'
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
