import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/40">
      <span className="text-lg font-black tracking-tight">OL</span>
    </div>
    <div className="leading-tight">
      <div className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-400">
        OnchainLens
      </div>
      <div className="text-xs text-slate-400">
        ончейн-аналитика
      </div>
    </div>
  </div>
);

const navItems = [
  { href: '#problem', label: 'Проблема' },
  { href: '#solution', label: 'Решение' },
  { href: '#how-it-works', label: 'Как это работает' },
  { href: '#demo', label: 'Демо' },
  { href: '#roadmap', label: 'Roadmap' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-colors ${
        scrolled ? 'bg-slate-950/90 backdrop-blur border-b border-slate-800/80' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center space-x-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition-colors"
          >
            Связаться
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800/70 hover:text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col space-y-2 text-sm text-slate-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-1 hover:bg-slate-800/70"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-cyan-500 px-4 py-2 text-center text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition-colors"
            >
              Связаться
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
