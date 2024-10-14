import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <Image
        className='h-52 animate-spin' 
        src='/spinner.svg' 
        alt='Loading...' 
        width={100} 
        height={100} 
      />
      <p className='mt-4 text-lg text-gray-700'>Loading, please wait...</p>
    </div>
  );
}
