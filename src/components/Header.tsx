import Logo from '../assets/common/logo.svg?react';

const Header = () => {
  return (
    <div className='w-full py-6 px-6'>
      <div className='flex flex-row items-center gap-2'>
        <Logo height={32} width={32}/>
        <h1 className='font-sans font-bold text-gray-900 text-2xl'>ProDental</h1>
      </div>
    </div>
  )
}

export default Header