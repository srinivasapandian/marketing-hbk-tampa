import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Generic answers - update once the Malvern menu is final
const faqs = [
  {
    q: 'What appetizers do you offer at House of Biryanis & Kebabs?',
    a: 'We serve various veg and non-veg appetizers like paneer, lotus root, chicken and fish starters.',
  },
  {
    q: 'What options do you have for Biriyanis?',
    a: 'We specialize in authentic dum biriyanis, including vegetable, Hyderabadi chicken, and Hyderabadi goat dum biryani.',
  },
  {
    q: 'What popular Ethnic Entrees can I order?',
    a: 'Our entrees include traditional curries like butter masala, malai kofta, and goat rogan josh.',
  },
  {
    q: 'What breads and accompaniments are available?',
    a: 'We serve freshly baked breads like butter naan, garlic naan, rumali roti, and paratta.',
  },
];

const serif = { fontFamily: "'Playfair Display', serif" };

const Faq = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="bg-[#1a130e] py-20 px-6 text-white">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
        <div>
          <p className="text-[#D8AA3E] text-sm font-bold uppercase tracking-[0.3em] mb-4">Got Questions?</p>
          <h2 className="text-3xl md:text-[40px] leading-[1.15] font-bold mb-5" style={serif}>
            Frequently Asked Questions
          </h2>
          <p className="text-white/65 text-base leading-7 max-w-md">
            Everything you need to know about House of Biryanis &amp; Kebabs Malvern — from our halal kitchen to catering and online ordering.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-[20px] border border-[#D8AA3E]/25 bg-[#0e0d0b]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5"
                >
                  <span className="text-base md:text-[19px] font-bold" style={serif}>{f.q}</span>
                  <span className="shrink-0 w-10 h-10 rounded-lg border border-[#D8AA3E]/50 flex items-center justify-center text-[#D8AA3E]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 md:px-6 pb-5 -mt-1 text-white/70 text-[15px] leading-7">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
