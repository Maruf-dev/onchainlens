import React from 'react';

const items = [
  {
    phase: 'Этап 1',
    title: 'Курсовой прототип',
    text: 'Демо-данные, базовый UI, описанная архитектура, интеграция с мок-API.',
  },
  {
    phase: 'Этап 2',
    title: 'Интеграция с реальными данными',
    text: 'Подключение Dune / Flipside, авторизация ключей API, кэширование результатов.',
  },
  {
    phase: 'Этап 3',
    title: 'Расширение метрик и сетей',
    text: 'Добавление новых блокчейнов, метрик риска и кластеризации инвесторов.',
  },
  {
    phase: 'Этап 4',
    title: 'Публичный продукт',
    text: 'Подготовка к открытому доступу: документация, лимиты, тарифные планы.',
  },
];

const Roadmap: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
        Roadmap: от курсовой до реального продукта
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm"
          >
            <div className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
              {step.phase}
            </div>
            <div className="mt-1 font-semibold text-slate-100">{step.title}</div>
            <p className="mt-2 text-slate-300">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
