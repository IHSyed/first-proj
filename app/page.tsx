import Image from 'next/image'
import panaversePic from '../../public/panaverse.png';

export default function Page() {
  return (
    <div className="flex justify-center bg-gray-300">
      <div className='mx-4 order-last self-center' >
        <Image src= {"/panaverse.png"} width={70} height={70} alt='music' />
        <button className='my-2 px-5 py-2 border-1 border-blue rounded-lg text-white bg-purple-800'> Apply </button>
      </div>
    <div className='mx-4 self-center text-center'>
      <h1 className='text-6x1 font-bold text-blue-700'>Welcome to Panaverse Dao Community</h1>
      <h2 className='text-3x1 font-semibold text-blue-500'>A Community of Web 3 and Metaverse Developers</h2>
      <h3> Project by Iqbal Hussain Syed </h3>
      <button className='my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900'>Learn More</button>
      </div>
      </div>
  );
}
