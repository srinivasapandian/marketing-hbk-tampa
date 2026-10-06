import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMain from '../../asserts/house-of-biryani.png';
import footerLogo from '../../asserts/footer.png';
import { CONTACT_INFO, SOCIAL_LINKS, BUSINESS_HOURS, ORDER_URL } from '../../utils/constants';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Menu', path: '/menu' },
  { name: 'Catering', path: '/catering' },
  { name: 'Order Online', external: true },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Heading = ({ children }) => (
  <>
    <h4 className="text-[13px] font-bold text-[#D8AA3E] uppercase tracking-[0.2em] mb-2">{children}</h4>
    <div className="h-[2px] w-10 bg-[#D8AA3E] mb-5" />
  </>
);

const Footer = () => {
  const [tab, setTab] = useState('Store');

  return (
    <footer className="bg-black pt-10 pb-6 px-6 text-white font-sans">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="h-[2px] w-full bg-center bg-no-repeat bg-contain opacity-95 mb-12"
          style={{ backgroundImage: 'url("/line.png")' }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start text-[15px]">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/">
              <img src={logoMain} alt="House of Biryanis Logo" className="w-28 h-28 object-contain" />
            </Link>
            <p className="mt-4 text-white/60 text-[14px] leading-relaxed text-center sm:text-left">
              Privacy Policy | Terms &amp; Conditions | Refund Policy
            </p>
            <h4 className="mt-6 text-[13px] font-bold text-[#D8AA3E] uppercase tracking-[0.2em] mb-2">Follow Us</h4>
            <div className="h-[2px] w-10 bg-[#D8AA3E] mb-4" />
            <div className="flex gap-3">
              {[{ Icon: Facebook, label: 'Facebook', href: SOCIAL_LINKS.facebook }, { Icon: Instagram, label: 'Instagram', href: SOCIAL_LINKS.instagram }].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-[#D8AA3E] hover:border-[#D8AA3E] transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <Heading>Quick Link</Heading>
            <ul className="space-y-3 text-white/80">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  {l.external ? (
                    <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#D8AA3E] transition-colors">{l.name}</a>
                  ) : (
                    <Link to={l.path} className="hover:text-[#D8AA3E] transition-colors">{l.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Heading>Contact Details</Heading>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3"><MapPin size={18} className="text-[#D8AA3E] mt-0.5 shrink-0" /><span>{CONTACT_INFO.address}</span></li>
              <li className="flex gap-3"><Phone size={18} className="text-[#D8AA3E] shrink-0" /><a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a></li>
              {CONTACT_INFO.phone2 && <li className="flex gap-3"><Phone size={18} className="text-[#D8AA3E] shrink-0" /><a href={`tel:${CONTACT_INFO.phone2}`}>{CONTACT_INFO.phone2}</a></li>}
              <li className="flex gap-3"><Star size={18} className="text-[#D8AA3E] shrink-0" /><a href={SOCIAL_LINKS.googleReview} target="_blank" rel="noopener noreferrer">Review us on Google</a></li>
              <li className="flex gap-3"><Mail size={18} className="text-[#D8AA3E] shrink-0" /><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <Heading>Business Hours</Heading>
            {Object.keys(BUSINESS_HOURS).length > 1 && <div className="flex gap-2 mb-4">
              {Object.keys(BUSINESS_HOURS).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1 rounded-full text-[13px] font-semibold border transition-colors ${
                    tab === t ? 'bg-[#D8AA3E] border-[#D8AA3E] text-black' : 'border-white/20 text-white/70 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>}
            <ul className="space-y-2 text-[14px]">
              {BUSINESS_HOURS[tab].map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span className="font-semibold">{h.day}</span>
                  {h.closed ? (
                    <span className="text-red-500">Closed</span>
                  ) : (
                    <span className="text-right text-white/70">
                      {h.slots.map((s) => (<span key={s} className="block">{s}</span>))}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-[14px] text-white/50">
          <p>© Copyright {new Date().getFullYear()} House of Biryanis and Kebabs. All rights reserved.</p>
          <a href="https://www.brisque.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 hover:opacity-80">
            <span>Powered by</span>
            <img src={footerLogo} alt="Brisque" className="h-5 w-auto object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
