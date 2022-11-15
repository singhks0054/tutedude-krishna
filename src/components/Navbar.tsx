import { Link } from 'react-router-dom';
import { logo, profile } from '../images/index';
import { FaAngleDown } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className='bg-[#FFFFFF] flex justify-between mx-4 lg:mx-16 my-4 items-center text-purple  '>
      <Link to='/'>
        <img src={logo} alt='tutedude logo' className='cursor-pointer' />
      </Link>
      <nav className='flex items-center justify-between gap-4 lg:gap-10'>
        <a href='/' className='hidden sm:block text-[#80008040]'>
          My Assignment
        </a>
        <a href='/' className='hidden sm:block text-[#80008040]'>
          Chat with Mentor
        </a>
        <span className='bg-purple py-2 px-4 cursor-pointer text-white sm:text-purple rounded-lg sm:bg-white '>
          <img
            src={profile}
            alt='profile logo'
            className='sm:inline  mr-2 hidden '
          />
          Profile Name
          <FaAngleDown className='inline ml-1 text-lg' />
        </span>
      </nav>
    </header>
  );
}
