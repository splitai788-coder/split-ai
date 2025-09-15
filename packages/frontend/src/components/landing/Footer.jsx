import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0c0a18] text-gray-400 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top section with links and social */}
        <div className="flex justify-evenly w-full  gap-8 ">
          {/* Product Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Features</Link></li>
              <li><Link href="#" className="hover:text-white">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-white">Bugbot</Link></li>
              <li><Link href="#" className="hover:text-white">CLI</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Docs</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Forum</Link></li>
              <li><Link href="#" className="hover:text-white">Changelog</Link></li>
              <li><Link href="#" className="hover:text-white">Downloads</Link></li>
              <li><Link href="#" className="hover:text-white">Students</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Terms</Link></li>
              <li><Link href="#" className="hover:text-white">Security</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="col-span-1 ">
            <div className="mb-4">
                {/* Language Selector Placeholder */}
                <button className="w-full md:w-auto border border-gray-600 rounded-lg px-4 py-2 flex justify-between items-center hover:border-white">
                    <span>English</span>
                    <span>⌄</span>
                </button>
            </div>
            <p className="mb-4 hover:text-white">hey@paradox.com</p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <Link href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.6 14.2c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.7.8-.9 1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.6.1-.1.2-.3.4-.4.1-.1.2-.2.2-.3.1-.1.1-.2 0-.4-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.6.4-.2.2-.7.8-.7 1.9 0 1.1.8 2.2.9 2.4.1.2 1.5 2.3 3.6 3.2.5.2.9.4 1.2.5.5.2.9.1 1.2-.1.4-.2.7-.8.9-1 .2-.2.2-.4.1-.5l-.3-.1zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
              </Link>
              <Link href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.2 7.4l-2.8 12.6H12l-2.1-7.5-5.1 7.5H1.2L7 11.2 1.4 4h3.6l4.2 6.3L12.9 4h3.1l-4.7 7.4 6.9-4z"/></svg>
              </Link>
              <Link href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.6 7.8c-.2-1.3-.7-2.3-1.8-3C18.8 4 16.2 4 12 4s-6.8 0-7.8.8c-1.1.7-1.6 1.7-1.8 3C2 9.1 2 12 2 12s0 2.9.4 4.2c.2 1.3.7 2.3 1.8 3 1 .8 3.6.8 7.8.8s6.8 0 7.8-.8c1.1-.7 1.6-1.7 1.8-3 .4-1.3.4-4.2.4-4.2s0-2.9-.4-4.2zM9.9 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2025 Made by Paradox</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;