import React from 'react';

const features = [
  {
    title: 'Ончейн-прозрачность',
    text: 'Используются только открытые данные блокчейна: никакого «чёрного ящика», все метрики можно воспроизвести по SQL-запросам.',
  },
  {
    title: 'Фокус на поведении инвестора',
    text: 'Вместо цены токена анализируются стратегии: удержание, профит, риск-профиль кошелька.',
  },
  {
    title: 'Мультичейн-поддержка',
    text: 'Архитектура позволяет расширять список сетей: Ethereum, BSC, L2-решения и другие EVM-совместимые блокчейны.',
  },
  {
    title: 'Учебный и исследовательский сценарий',
    text: 'Проект может использоваться в курсовых, дипломах и прикладных исследованиях по блокчейну и финтеху.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
        Ключевые возможности OnchainLens
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <h3 className="text-sm font-semibold text-slate-100">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
