import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6 shadow-inner border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Get to Know Us */}
        <div>
          <h4 className="text-2xl font-bold mb-5 text-blue-400">Get to Know Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {['about', 'careers', 'press-releases', 'DripKart', 'contact'].map((page, idx) => (
              <li key={idx}>
                <Link href={`/${page}`} className="relative group">
                  <span className="group-hover:text-blue-300 transition duration-200">
                    {page.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  <span className="block w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Make Money with Us */}
        <div>
          <h4 className="text-2xl font-bold mb-5 text-blue-400">Make Money with Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/sell" className="hover:text-blue-300 transition">Sell on MechaNova</Link></li>
            <li><Link href="/accelerator" className="hover:text-blue-300 transition">Sell under Accelerator</Link></li>
            <li><Link href="/advertise" className="hover:text-blue-300 transition">Advertise Your Products</Link></li>
            <li><Link href="/affiliate" className="hover:text-blue-300 transition">Become an Affiliate</Link></li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div>
          <h4 className="text-2xl font-bold mb-5 text-blue-400">Let Us Help You</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/account" className="hover:text-blue-300 transition">Your Account</Link></li>
            <li><Link href="/returns" className="hover:text-blue-300 transition">Returns Centre</Link></li>
            <li><Link href="/recalls" className="hover:text-blue-300 transition">Product Safety & Recalls</Link></li>
            <li><Link href="/help" className="hover:text-blue-300 transition">Help</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-gray-700"></div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 text-xl mb-8">
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
          <FaFacebookF />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-300">
          <FaTwitter />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
          <FaInstagram />
        </Link>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-white font-semibold">MechaNova</span>. All rights reserved.
        </p>
        <p className="mt-1 italic text-gray-500">"Mechanically Inspired. Digitally Driven."</p>
      </div>
    </footer>
  );
};

export default Footer;
