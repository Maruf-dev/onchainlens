import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <div>OnchainLens · ончейн-аналитика для выявления прибыльных инвесторов</div>
          <div className="mt-1 text-[11px]">
            · Web3 / Blockchain / Fintech
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/Maruf-dev/onchainlens" className="hover:text-cyan-300 transition-colors">
            GitHub (репозиторий)
          </a>
          <a href="#hero" className="hover:text-cyan-300 transition-colors">
            Вверх ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
