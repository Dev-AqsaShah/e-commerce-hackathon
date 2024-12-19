import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Image
          src="/assets/header.png" 
          alt="Logo"
          width={30}
          height={30} 
          className="object-contain"
        />
      </div>

      {/* Right Side - Links */}
      <nav className="flex items-center space-x-2 text-sm text-gray-700">
        <Link href="/" className="hover:underline">
          Find a Store
        </Link>
        <span>|</span>
        <Link href="/contact" className="hover:underline">
          Help
        </Link>
        <span>|</span>
        <Link href="/joinUs" className="hover:underline">
          Join Us
        </Link>
        <span>|</span>
        <Link href="/login" className="hover:underline">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
