export const SectionHeader = ({ label }: { label: string }) => (
  <div className='flex px-5 w-screen'>
    <div className='flex items-center p-2 my-4 mx-auto w-full max-w-xl bg-yellow-300 duration-300 -skew-x-12 shadow-[10px_10px] shadow-pink-500 hacker:skew-x-0 hacker:rounded-sm hacker:border hacker:border-green-500 hacker:bg-black hacker:shadow hacker:shadow-green-500'>
      <hr className='w-full border border-blue-500 duration-300 hacker:border-green-500' />
      <h2 className='mx-2 text-4xl text-pink-500 duration-300 font-thunder hacker:font-glitch hacker:text-green-500'>
        {label}
      </h2>
      <hr className='w-full border border-blue-500 duration-300 hacker:border-green-500' />
    </div>
  </div>
);
