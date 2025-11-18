import React from 'react';

const Solution: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
        Решение: OnchainLens — слой аналитики над блокчейном
      </h2>
      <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
        OnchainLens превращает публичные ончейн-данные в рейтинги инвесторов и
        портфели «diamond hands». Система агрегирует данные из аналитических
        платформ, рассчитывает ключевые метрики и визуально показывает,
        какие кошельки ведут себя последовательно и прибыльно.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-cyan-300 mb-1">
            1. Сбор ончейн-данных
          </div>
          <p className="text-sm text-slate-100">
            Использование Dune / Flipside для получения уже очищенных таблиц транзакций,
            токен-трансферов и историй кошельков.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-sky-300 mb-1">
            2. Аналитика поведения
          </div>
          <p className="text-sm text-slate-100">
            Расчёт PnL, среднего времени удержания активов, частоты сделок и
            интегрального рейтинга «profitability score».
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-purple-300 mb-1">
            3. Веб-интерфейс
          </div>
          <p className="text-sm text-slate-100">
            Next.js + TypeScript + Tailwind: интерактивные таблицы, фильтры по
            сети и токену, наглядные графики и панель демо-результатов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
