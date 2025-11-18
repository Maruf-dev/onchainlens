import React from 'react';

const steps = [
  {
    title: 'Подготовленные ончейн-датасеты',
    text: 'Используются SQL-запросы к таблицам транзакций и токен-трансферов в Dune / Flipside. Результаты доступны через API.'
  },
  {
    title: 'Аналитический слой',
    text: 'На серверной стороне рассчитываются PnL, длительность удержания, количество успешных сделок и интегральный рейтинг инвестора.'
  },
  {
    title: 'Интерактивный фронтенд',
    text: 'Веб-приложение отображает топ-кошельки, графики и фильтры. Демо-режим использует мок-данные, реальный режим — API.'
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
        Как это работает на уровне системы
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <div className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border border-cyan-400 text-[11px] text-cyan-300">
              {idx + 1}
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-100">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
