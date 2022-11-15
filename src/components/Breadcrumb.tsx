import { Link } from 'react-router-dom';
export default function Breadcrumb() {
  return (
    <nav className='bg-grey-light rounded-md text-sm mx-8 sm:mx-12 lg:mx-40 my-4 flex text-black'>
      <span>UI/UX &gt; &nbsp;</span>
      <Link to='/' className='hover:text-blue-700'>
        Refer & Earn &gt; &nbsp;
      </Link>
      <Link to='/referfriend' className='hover:text-blue-700'>
        Friend Reffered
      </Link>
    </nav>
  );
}
