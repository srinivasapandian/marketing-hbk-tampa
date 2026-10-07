import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Users, UtensilsCrossed, ChefHat } from 'lucide-react';
import { motion } from 'motion/react';
import heroImg from '../asserts/banner-2.png';
import ContactSection from '../components/ContactSection';
import { menuCategories } from '../data/menuData';

const offers = [
  { title: 'Wedding Catering', Icon: Users, text: 'Make your special day unforgettable. We provide full wedding catering with appetizer spreads, a wide variety of main courses, and a dedicated service team.' },
  { title: 'Corporate Events', Icon: UtensilsCrossed, text: 'Impress your clients and colleagues with a premium South Asian spread — from working lunches to large-scale company celebrations.' },
  { title: 'Private Parties', Icon: ChefHat, text: 'Birthday, anniversary, graduation — whatever the occasion, we bring the feast to you with customizable menus and on-site chefs.' },
];

const steps = [
  { n: '01', title: 'Get in Touch', text: 'Fill out our inquiry form or call us to discuss your event size, date, and menu preferences.' },
  { n: '02', title: 'Customise', text: 'Our team will tailor a menu package to suit your budget, dietary needs, and event style.' },
  { n: '03', title: 'We Handle the Rest', text: 'Our chefs and service team arrive, set up, cook fresh, and ensure your guests are delighted.' },
];

const serif = { fontFamily: 'Constantia, serif' };

const Heading = ({ eyebrow, children }) => (
  <div className="text-center">
    <p className="text-[#D8AA3E] text-sm font-bold uppercase tracking-[0.25em] mb-3">{eyebrow}</p>
    <h2 className="title-with-line text-4xl md:text-[52px]" style={serif}>{children}</h2>
  </div>
);

const Catering = () => (
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
        <p className="text-[#D8AA3E] text-sm font-bold uppercase tracking-[0.25em] mb-4">Catering Services</p>
        <h1 className="text-5xl md:text-[72px] leading-[1.1] font-bold" style={serif}>
          Bringing the Feast<br /><span className="text-[#D8AA3E]">To Your Event</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
          Authentic halal South Asian catering for weddings, corporate events, private parties, and everything in between.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/catering#contact-us" className="inline-flex items-center gap-2 rounded-full bg-[#D8AA3E] text-black font-semibold px-8 py-3.5 hover:brightness-110 transition">
            <Phone size={18} /> Request a Quote
          </Link>
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-white/25 font-semibold px-8 py-3.5 hover:border-[#D8AA3E] transition">
            View Our Menu <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>

    {/* What we offer */}
    <section className="py-20 px-6 max-w-[1200px] mx-auto">
      <Heading eyebrow="What we offer">Catering for Every Occasion</Heading>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map(({ title, Icon, text }) => (
          <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center">
            <div className="w-[72px] h-[72px] mx-auto mb-6 rounded-2xl bg-[#D8AA3E]/15 flex items-center justify-center">
              <Icon className="text-[#D8AA3E]" size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={serif}>{title}</h3>
            <p className="text-white/75 leading-7">{text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Catering enquiry form (same form and SMTP as the contact page) */}
    <section className="pb-10">
      <div className="text-center px-6">
        <Heading eyebrow="Plan your event">Catering Enquiry</Heading>
      </div>
      <ContactSection hideHeading />
    </section>

    {/* Regular menu (no prices) */}
    <section id="catering-menu" className="py-20 px-6 max-w-[1200px] mx-auto">
      <Heading eyebrow="Our regular menu">Catering Menu</Heading>
      <div className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-6">
        {menuCategories.map((category) => (
          <div key={category.name} className="break-inside-avoid mb-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-bold text-[#D8AA3E] mb-4" style={serif}>{category.name}</h3>
            {category.sections.map((section, si) => (
              <div key={section.name || si} className={si > 0 ? 'mt-4' : ''}>
                {section.name && <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">{section.name}</p>}
                <ul className="space-y-1.5 text-white/80 text-[15px] leading-snug">
                  {section.items.map((item) => (<li key={item.id}>{item.name}</li>))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-lg text-[#D8AA3E] italic" style={serif}>
        We do all varieties of customizations on customer request.
      </p>
      <div className="mt-6 text-center">
        <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-white/25 font-semibold px-8 py-3 hover:border-[#D8AA3E] transition">
          View Full Menu <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 px-6 max-w-[1200px] mx-auto">
      <Heading eyebrow="Simple process">How It Works</Heading>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {steps.map((s, i) => (
          <div key={s.n} className="text-center">
            <div className="relative flex items-center justify-center">
              {i < steps.length - 1 && <div className="hidden md:block absolute left-1/2 w-full h-px bg-[#D8AA3E]/30" />}
              <div className="relative w-[70px] h-[70px] rounded-full border border-[#D8AA3E]/60 bg-[#1a130e] flex items-center justify-center text-[#D8AA3E] text-lg font-bold" style={serif}>
                {s.n}
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold" style={serif}>{s.title}</h3>
            <p className="mt-3 text-white/75 leading-7 max-w-xs mx-auto">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link to="/catering#contact-us" className="inline-flex items-center gap-2 rounded-full bg-[#D8AA3E] text-black font-semibold px-8 py-3.5 hover:brightness-110 transition">
          Request a Quote <ArrowRight size={18} />
        </Link>
      </div>
    </section>

  </div>
);

export default Catering;
