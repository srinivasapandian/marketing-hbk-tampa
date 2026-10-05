import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { menuCategories } from '../data/menuData';

const serif = { fontFamily: "'Playfair Display', serif" };

const countItems = (category) => category.sections.reduce((total, s) => total + s.items.length, 0);

export default function MenuSection({ standalone = false }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (standalone) window.scrollTo(0, 0);
  }, [standalone]);

  const scrollTabs = (dir) => tabsRef.current?.scrollBy({ left: dir * 240, behavior: 'smooth' });
  const category = menuCategories[active];
  const itemCount = countItems(category);
  const [regularLabel, familyLabel] = category.priceLabels ?? ['Regular', 'Family Pack'];

  return (
    <section id="menu" className="bg-black text-white px-4 md:px-6 py-8 min-h-[70vh]">
      <div className="max-w-[1280px] mx-auto">
        {/* Category tabs */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#161616] p-2">
          <button
            onClick={() => scrollTabs(-1)}
            aria-label="Previous categories"
            className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <div ref={tabsRef} className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {menuCategories.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActive(i)}
                className={`shrink-0 flex items-center gap-3 rounded-full px-6 py-2.5 font-bold text-[15px] transition-colors ${
                  i === active ? 'bg-[#C9A000] text-black' : 'text-white hover:text-[#D8AA3E]'
                }`}
                style={serif}
              >
                {c.name}
                <span className="rounded-full bg-white text-black text-xs font-bold px-2 py-0.5">
                  {String(countItems(c)).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTabs(1)}
            aria-label="Next categories"
            className="shrink-0 w-10 h-10 rounded-full border border-[#D8AA3E] flex items-center justify-center text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Heading */}
        <div className="mt-10 mb-8">
          <div className="flex items-end gap-6">
            <h2 className="title-with-line uppercase tracking-wider text-3xl md:text-[40px] font-bold" style={serif}>
              {category.name}
            </h2>
            <span className="pb-3 text-sm text-white/50">{itemCount} items</span>
          </div>
          {category.notes?.map((note) => (
            <p key={note} className="mt-3 max-w-3xl text-sm leading-relaxed text-[#D8AA3E]">{note}</p>
          ))}
        </div>

        {/* Sections */}
        {category.sections.map((section, si) => (
          <div key={section.name ?? si} className="mb-10 last:mb-0">
            {section.name && (
              <h3 className="mb-5 inline-block rounded-full border border-[#D8AA3E] px-5 py-1.5 text-sm font-bold uppercase tracking-wider text-[#D8AA3E]">
                {section.name}
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {section.items.map((item) => (
                <article
                  key={item.id}
                  className="relative flex flex-col rounded-[28px] border border-[#D8AA3E]/30 bg-[#0e0d0b] p-[18px]"
                >
                  <h3 className="text-xl font-bold" style={serif}>{item.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.familyPrice ? (
                      <>
                        <span className="rounded-full bg-white text-black text-sm font-bold px-3 py-1">
                          {regularLabel} {item.price}
                        </span>
                        <span className="rounded-full border border-[#D8AA3E]/60 text-[#D8AA3E] text-sm font-bold px-3 py-1">
                          {familyLabel} {item.familyPrice}
                        </span>
                      </>
                    ) : (
                      <span className="rounded-full bg-white text-black font-bold px-4 py-1">{item.price}</span>
                    )}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/70 line-clamp-3">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
