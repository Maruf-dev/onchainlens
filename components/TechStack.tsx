import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
        Технологический стек и архитектура
      </h2>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr),minmax(0,1.2fr)]">
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
          <p>
            Клиентская часть реализована на <span className="text-cyan-300">Next.js + TypeScript + Tailwind CSS</span>,
            что обеспечивает строгую типизацию, адаптивный дизайн и современный UX.
          </p>
          <p>
            Серверная логика может быть реализована либо в виде API-маршрутов Next.js,
            либо как отдельный Node.js-сервис, который выполняет запросы к Dune / Flipside
            и кэширует результаты.
          </p>
          <p>
            По необходимости результаты аналитики могут записываться в реляционную базу
            данных (например, PostgreSQL) для последующей агрегации и оффлайн-анализа.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-300">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Схема взаимодействия компонентов
          </div>
          <pre className="overflow-x-auto rounded-xl bg-slate-950/80 p-3 font-mono text-[11px] leading-relaxed">
{`[User Browser]
      │
      ▼
[Next.js Frontend]  ←→  [Next.js / Node.js API Layer]
                             │
                             ▼
                    [Dune / Flipside API]
                             │
                             ▼
                        [Blockchain Data]`}
          </pre>
          <p className="mt-2">
            Данная схема может быть включена в раздел «Архитектура системы» в курсовой работе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
