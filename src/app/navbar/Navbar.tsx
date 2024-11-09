// app/navbar/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <ul className="inline-flex space-x-8">
          <li className="inline-block">
            <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/aboutus" className="hover:text-gray-300 transition-colors duration-200">
              About Us
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/contact" className="hover:text-gray-300 transition-colors duration-200">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
