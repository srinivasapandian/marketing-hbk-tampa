import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { menuCategories } from '../data/menuData';

const serif = { fontFamily: "'Playfair Display', serif" };

const countItems = (category) => category.sections.reduce((total, s) => total + s.items.length, 0);
const totalItems = menuCategories.reduce((total, c) => total + countItems(c), 0);

const ALL = -1;

// "Samosa (3)" -> ["Samosa", "(3)"], so the qualifier can be styled like the printed menu
const splitName = (name) => {
  const m = name.match(/^(.*?)\s*(\([^()]*\))$/);
  return m ? [m[1], m[2]] : [name, null];
};

function ItemName({ name }) {
  const [base, qualifier] = splitName(name);
  return (
    <h3
      className="min-w-0 text-lg md:text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#D8AA3E]"
      style={serif}
    >
      {base}
      {qualifier && <span className="ml-1.5 align-middle text-xs md:text-sm font-semibold text-[#D8AA3E]/80" style={{ fontFamily: 'var(--font-sans)' }}>{qualifier}</span>}
    </h3>
  );
}

const Leader = ({ className = '' }) => (
  <span aria-hidden="true" className={`min-w-6 flex-1 border-b border-dotted border-white/25 ${className}`} />
);

function MenuRow({ item }) {
  return (
    <article className="group border-b border-white/10 py-5">
      <div className="flex items-baseline gap-3">
        <ItemName name={item.name} />
        <Leader />
        <span className="max-w-[45%] shrink-0 text-right text-base md:text-lg font-bold text-[#D8AA3E]" style={serif}>{item.price}</span>
      </div>
      <p className="mt-1.5 max-w-[85%] text-sm leading-relaxed text-white/55">{item.description}</p>
    </article>
  );
}

function FamilyMenuRow({ item, labels }) {
  return (
    <article className="group border-b border-white/10 py-5">
      <div className="flex items-baseline gap-3">
        <ItemName name={item.name} />
        <Leader className="hidden sm:block" />
        <span className="hidden sm:block w-28 shrink-0 text-right text-base font-bold text-[#D8AA3E]" style={serif}>{item.price}</span>
        <span className="hidden sm:block w-28 shrink-0 text-right text-base font-bold text-white/80" style={serif}>
          {item.familyPrice ?? '—'}
        </span>
      </div>
      <p className="mt-1.5 max-w-[85%] text-sm leading-relaxed text-white/55">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm sm:hidden">
        <span className="text-white/50">{labels[0]} <b className="text-[#D8AA3E]">{item.price}</b></span>
        {item.familyPrice && <span className="text-white/50">{labels[1]} <b className="text-white/80">{item.familyPrice}</b></span>}
      </div>
    </article>
  );
}

function CategoryBlock({ category }) {
  const labels = category.priceLabels;

  return (
    <div>
      {/* Heading */}
      <div className="mt-10 mb-6">
        <div className="flex items-end gap-6">
          <h2 className="title-with-line uppercase tracking-wider text-3xl md:text-[40px] font-bold" style={serif}>
            {category.name}
          </h2>
          <span className="pb-3 text-sm text-white/50">{countItems(category)} items</span>
        </div>
        {category.notes?.map((note) => (
          <p key={note} className="mt-3 max-w-3xl text-sm leading-relaxed text-[#D8AA3E]">{note}</p>
        ))}
      </div>

      {/* Sections */}
      {category.sections.map((section, si) => (
        <div key={section.name ?? si} className="mb-10 last:mb-0">
          {section.name && (
            <div className="mt-8 mb-1 flex items-center gap-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#D8AA3E]">{section.name}</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-[#D8AA3E]/50 to-transparent" />
            </div>
          )}
          {labels ? (
            // Split into two halves so each column gets its own price header
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">
              {[0, 1].map((half) => {
                const mid = Math.ceil(section.items.length / 2);
                const items = half === 0 ? section.items.slice(0, mid) : section.items.slice(mid);
                return (
                  <div key={half}>
                    <div
                      className={`${half === 0 ? 'hidden sm:flex' : 'hidden lg:flex'} justify-end gap-3 border-b border-[#D8AA3E]/30 pb-2 text-xs font-bold uppercase tracking-widest text-white/50`}
                    >
                      <span className="w-28 text-right">{labels[0]}</span>
                      <span className="w-28 text-right">{labels[1]}</span>
                    </div>
                    {items.map((item) => (
                      <FamilyMenuRow key={item.id} item={item} labels={labels} />
                    ))}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">
              {section.items.map((item) => (
                <MenuRow key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function MenuSection({ standalone = false }) {
  const [active, setActive] = useState(ALL);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (standalone) window.scrollTo(0, 0);
  }, [standalone]);

  const scrollTabs = (dir) => tabsRef.current?.scrollBy({ left: dir * 240, behavior: 'smooth' });
  const tabs = [{ index: ALL, name: 'All', count: totalItems }].concat(
    menuCategories.map((c, i) => ({ index: i, name: c.name, count: countItems(c) }))
  );
  const shown = active === ALL ? menuCategories : [menuCategories[active]];

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
            {tabs.map((t) => (
              <button
                key={t.name}
                onClick={() => setActive(t.index)}
                className={`shrink-0 flex items-center gap-3 rounded-full px-6 py-2.5 font-bold text-[15px] transition-colors ${
                  t.index === active ? 'bg-[#C9A000] text-black' : 'text-white hover:text-[#D8AA3E]'
                }`}
                style={serif}
              >
                {t.name}
                <span className="rounded-full bg-white text-black text-xs font-bold px-2 py-0.5">
                  {String(t.count).padStart(2, '0')}
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

        <div className="space-y-16">
          {shown.map((category) => (
            <CategoryBlock key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
