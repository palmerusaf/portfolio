export const SectionHeader = ({ label }: { label: string }) => (
  <div className='flex w-full px-5'>
    <div className='mx-auto my-4 flex w-full max-w-xl -skew-x-12 items-center bg-yellow-300 p-2 shadow-[10px_10px] shadow-pink-500 duration-300 hacker:skew-x-0 hacker:rounded-sm hacker:border hacker:border-green-500 hacker:bg-black hacker:shadow hacker:shadow-green-500'>
      <hr className='w-full border border-blue-500 duration-300 hacker:border-green-500' />
      <h2 className='mx-2 font-thunder text-4xl text-pink-500 duration-300 hacker:font-glitch hacker:text-green-500'>
        {label}
      </h2>
      <hr className='w-full border border-blue-500 duration-300 hacker:border-green-500' />
    </div>
  </div>
);
