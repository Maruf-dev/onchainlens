import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-purple-600/20 p-6 sm:p-8">
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr),minmax(0,1.3fr)] md:items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Использовать OnchainLens в учебных и реальных проектах
          </h2>
          <p className="mt-2 text-sm text-slate-100">
            Проект можно развивать в сторону диплома, стартапа или внутреннего
            аналитического сервиса. Архитектура уже готова к подключению реальных ончейн-данных.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <a
            href="mailto:youremail@example.com"
            className="block w-full rounded-full bg-slate-950 px-5 py-2.5 text-center font-medium text-cyan-300 shadow-lg shadow-slate-950/80 hover:text-cyan-100 hover:bg-slate-900 transition-colors"
          >
            Связаться с автором проекта
          </a>
          <a
            href="#hero"
            className="block w-full rounded-full border border-slate-300/30 bg-slate-950/40 px-5 py-2.5 text-center text-slate-200 hover:border-cyan-400/60 hover:text-cyan-100 transition-colors text-xs"
          >
            Вернуться к описанию проекта
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
