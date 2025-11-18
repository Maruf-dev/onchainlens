import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      {/* Left side: text */}
      <div className="space-y-6">
        <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>Web3 ончейн-аналитика</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Ончейн-аналитика для выявления&nbsp;
          <span className="bg-gradient-to-tr from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
            прибыльных инвесторов
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          OnchainLens анализирует открытые данные блокчейна и помогает находить
          <span className="font-medium text-cyan-300"> «diamond hands»</span> и
          <span className="font-medium text-cyan-300"> эффективных держателей активов</span>.
          Проект совмещает академический подход к исследованию ончейн-данных
          и практическую реализацию в виде веб-приложения.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#demo"
            className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition-colors"
          >
            Смотреть демо-рейтинги
          </a>
          <a
            href="#tech"
            className="rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-cyan-500/60 hover:text-cyan-200 transition-colors"
          >
            Архитектура и технологии
          </a>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-slate-400">
          <div>
            <div className="font-semibold text-slate-200">Стек</div>
            <div>Next.js · TypeScript · Tailwind CSS</div>
          </div>
          <div>
            <div className="font-semibold text-slate-200">Данные</div>
            <div>Dune / Flipside (API, ончейн-таблицы)</div>
          </div>
        </div>
      </div>

      {/* Right side: glass card */}
      <div className="relative ml-auto mt-10 w-full max-w-md md:mt-0">
        <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-8 -left-10 h-32 w-32 rounded-full bg-purple-500/30 blur-3xl" />

        <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-2xl shadow-cyan-500/30 backdrop-blur">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-medium text-slate-200">On-chain Snapshot</span>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-500/40">
              live (demo)
            </span>
          </div>

          <div className="mt-4 space-y-3 text-xs">
            <div className="flex items-center justify-between rounded-xl bg-slate-950/60 p-3">
              <div>
                <div className="text-[11px] uppercase tracking-wide text-slate-400">
                  Топ-кошелёк
                </div>
                <div className="font-mono text-sm text-slate-50">0xAbC...01</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-emerald-400">PnL +84%</div>
                <div className="text-[11px] text-slate-400">120 дней удержания</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-slate-900/80 p-2">
                <div className="text-[10px] text-slate-300">Diamond hands</div>
                <div className="text-lg font-semibold text-cyan-300">42</div>
                <div className="text-[10px] text-slate-400">кошелька</div>
              </div>
              <div className="rounded-xl bg-slate-900/80 p-2">
                <div className="text-[10px] text-slate-300">Средний PnL</div>
                <div className="text-lg font-semibold text-emerald-400">+61%</div>
                <div className="text-[10px] text-slate-400">по выборке</div>
              </div>
              <div className="rounded-xl bg-slate-900/80 p-2">
                <div className="text-[10px] text-slate-300">Сети</div>
                <div className="text-lg font-semibold text-sky-300">5</div>
                <div className="text-[10px] text-slate-400">EVM & L2</div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-[10px] text-slate-400">
            Курсовой проект демонстрирует, как открытые ончейн-данные могут превращаться
            в практический аналитический инструмент для инвесторов и исследователей.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
