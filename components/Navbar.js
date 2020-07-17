import Link from 'next/link';

const NavBar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-black p-6" role="navigation" aria-label="Site Menu">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link href="/">
        <a className="font-semibold text-xl tracking-tight">SpaceX API</a>
      </Link>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link href="/">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            Launches
          </a>
        </Link>
        <Link href="/about">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            About
         </a>
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;