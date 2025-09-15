import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 p-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">
          SPLIT AI
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li><Link href="#" className="hover:text-white">Code</Link></li>
          <li><Link href="#" className="hover:text-white">Features</Link></li>
          <li><Link href="#" className="hover:text-white">Blog</Link></li>
          <li><Link href="#" className="hover:text-white">Enterprise</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white">Sign In</button>
          <button className="bg-transparent text-white font-semibold py-2 px-5 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
            Download
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;