import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoMain from '../../asserts/house-of-biryani.png';

const ORDER_URL = 'https://example.com/order-online';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Menu', path: '/menu' },
  { name: 'Catering', path: '/catering' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' && !location.hash : `${location.pathname}${location.hash}` === path;

  const linkClass = (path) =>
    `uppercase tracking-wide text-[16px] font-bold [font-family:'Playfair_Display',serif] transition-colors ${
      isActive(path) ? 'text-[#D8AA3E]' : 'text-white hover:text-[#D8AA3E]'
    }`;

  return (
    <header className="sticky top-0 z-[1000] w-full bg-black border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 h-[72px] lg:h-[90px] flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logoMain}
            alt="House of Biryanis Logo"
            className="h-11 w-11 lg:h-14 lg:w-14 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9 rounded-full border border-white/10 bg-[#0F1115] px-14 h-[52px]">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkClass(link.path)}>
              {link.name}
            </Link>
          ))}
        </nav>

        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block rounded-full border border-[#D8AA3E] px-6 py-2 uppercase text-[15px] font-bold text-white [font-family:'Playfair_Display',serif] hover:bg-[#D8AA3E]/10 transition-colors"
        >
          Order Online
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={34} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[1000] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-[300px] bg-black border-l border-white/10 z-[1001] lg:hidden px-5 pt-5"
            >
              <button
                className="ml-auto block text-[#D8AA3E] p-2 mb-6"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={34} />
              </button>

              <ul>
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-white/10">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-3 uppercase tracking-wider text-[14px] font-bold [font-family:'Playfair_Display',serif] ${
                        isActive(link.path)
                          ? 'text-[#D8AA3E] bg-[#D8AA3E]/10'
                          : 'text-white hover:text-[#D8AA3E]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-8 block w-full rounded-lg bg-[#D8AA3E] py-3 text-center uppercase text-[13px] font-bold text-black tracking-wider"
              >
                Order Online
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
