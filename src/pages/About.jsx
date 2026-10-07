import { Link } from 'react-router-dom';
import { ArrowRight, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { ORDER_URL } from '../utils/constants';
import heroImg from '../asserts/banner-4.png';
import FoodCombo from '../components/FoodCombo';
import menuSoup from '../asserts/homepage-menuimages/tomato-soup.png';
import menuSamosa from '../asserts/homepage-menuimages/samosas.png';
import menuKebab from '../asserts/homepage-menuimages/seekh-kebabs.png';
import menuBiryani from '../asserts/homepage-menuimages/chicken-biryani.png';

const promises = [
  { title: 'Premium Quality', icon: '/premiuim%20quality.png', text: 'Only the finest basmati rice, hand-picked spices, and fresh ingredients make it into our kitchen.' },
  { title: '100% Halal', lucide: true, text: 'Every cut of meat is hand-slaughtered and halal-certified — no compromises, ever.' },
  { title: 'Master Chefs', icon: '/best%20chefs.png', text: 'Our chefs carry decades of experience cooking authentic South Asian and Indian cuisine.' },
  { title: 'Freshly Served', icon: '/freshey%20served.png', text: 'Every biryani is cooked to order using the traditional dum slow-cook method.' },
  { title: 'Event Catering', icon: '/best%20catering.png', text: 'From intimate gatherings to grand celebrations — we bring the feast to your door.' },
];

const dishes = [
  { name: 'Soups', image: menuSoup },
  { name: 'Appetizers', image: menuSamosa },
  { name: 'Kebabs', image: menuKebab },
  { name: 'Biryanis & Entrees', image: menuBiryani },
];

const SectionTitle = ({ eyebrow, children, center = true }) => (
  <div className={center ? 'text-center' : ''}>
    {eyebrow && <p className="text-[#D8AA3E] text-sm font-bold uppercase tracking-[0.25em] mb-3">{eyebrow}</p>}
    <h2 className="title-with-line text-4xl md:text-[48px]" style={{ fontFamily: 'Constantia, serif' }}>{children}</h2>
  </div>
);

const About = () => (
  <div className="bg-[#1a130e] text-white">
    {/* Hero */}
    <section className="relative border-b border-[#D8AA3E] overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 py-20 md:py-28 max-w-4xl mx-auto"
      >
        <p className="text-[#D8AA3E] text-sm font-bold uppercase tracking-[0.25em] mb-4">Our Story</p>
        <h1 className="text-5xl md:text-[72px] leading-[1.1] font-bold" style={{ fontFamily: 'Constantia, serif' }}>
          House of Biryani<br /><span className="text-[#D8AA3E] font-normal">North Wales</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
          Authentic halal Indian cuisine with Hyderabadi and South Indian flavors, slow-cooked with love and served with pride in North Wales, PA.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] text-black font-semibold px-8 py-3.5 hover:brightness-110 transition">
            Explore Our Menu <ArrowRight size={18} />
          </Link>
          <Link to="/contact-us" className="inline-flex items-center rounded-full border border-white/25 font-semibold px-8 py-3.5 hover:border-[#D8AA3E] transition">
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Story */}
    <section className="py-20 px-6 max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative">
        <FoodCombo className="w-full h-[380px] md:h-[560px] rounded-[28px]" />
        <img src="/halal.png" alt="Halal certified" className="absolute bottom-4 right-4 w-20 h-20 rounded-full border-2 border-[#D8AA3E] bg-black p-1 object-contain" />
      </div>
      <div className="space-y-5 text-[17px] leading-8 text-white/85">
        <SectionTitle center={false}>About Us</SectionTitle>
        <h3 className="text-2xl md:text-[28px] font-bold text-white" style={{ fontFamily: 'Constantia, serif' }}>Born from a Passion for Authentic Biryani</h3>
        <p>House of Biryani North Wales started with a simple dream — to recreate the bold, fragrant flavors of South Asia right here in Montgomery County. Rooted in time-honored recipes and authentic spice blends passed down through generations, every dish we serve carries that rich culinary legacy.</p>
        <p>We use the traditional <span className="text-[#FFD700] font-semibold">dum</span> method — slow-cooking each biryani in a sealed pot so the steam, spice, and aroma infuse together perfectly. Nothing is rushed. Nothing is reheated. Every plate that leaves our kitchen is made fresh, with care.</p>
        <p>We are proud to be 100% halal certified, welcoming guests of all backgrounds to experience the warmth of South Asian hospitality right here in Pennsylvania.</p>
        <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] text-black font-semibold px-8 py-3.5 hover:brightness-110 transition">
          View Our Menu <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    {/* Promise */}
    <section className="py-16 px-6 max-w-[1200px] mx-auto">
      <SectionTitle eyebrow="What sets us apart">Our Promise to You</SectionTitle>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {promises.map((p) => (
          <div key={p.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#D8AA3E]/15 flex items-center justify-center">
              {p.lucide ? <Moon className="text-[#FFD700]" size={30} /> : <img src={p.icon} alt="" className="w-9 h-9 object-contain brightness-0 invert" />}
            </div>
            <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'Constantia, serif' }}>{p.title}</h3>
            <p className="text-white/75 text-[15px] leading-7">{p.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Signature dishes */}
    <section className="py-20 px-6 max-w-[1200px] mx-auto">
      <SectionTitle eyebrow="From our kitchen">Signature Dishes</SectionTitle>
      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {dishes.map((d) => (
          <Link key={d.name} to="/menu" className="group rounded-[24px] overflow-hidden border border-white/10 bg-[#111] block">
            <img src={d.image} alt={d.name} className="w-full h-40 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="py-5 text-center">
              <h3 className="font-bold" style={{ fontFamily: 'Constantia, serif' }}>{d.name}</h3>
              <span className="mt-2 inline-flex items-center gap-1 text-[#D8AA3E] text-sm font-bold uppercase tracking-wider">View more <ArrowRight size={14} /></span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] text-black font-semibold px-8 py-3.5 hover:brightness-110 transition">
          Order Online <ArrowRight size={18} />
        </a>
      </div>
    </section>
  </div>
);

export default About;
