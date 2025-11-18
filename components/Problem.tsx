import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
        Проблема: данные блокчейна открыты, но непонятны
      </h2>
      <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
        Каждый шаг инвестора в блокчейне прозрачен: транзакции, взаимодействия со
        смарт-контрактами, движение токенов. Однако для большинства пользователей
        эта информация остаётся «сырым» набором записей в эксплорере. Трудно ответить
        на простой вопрос: <span className="text-cyan-300">кто на самом деле зарабатывает?</span>
      </p>
      <ul className="grid gap-3 text-sm text-slate-300 md:grid-cols-3">
        <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
            Шум вместо сигнала
          </div>
          <p className="text-sm">
            Тысячи транзакций, десятки токенов и протоколов — но нет готового ответа,
            какие кошельки стабильно прибыльны.
          </p>
        </li>
        <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
            Отсутствие «умных» фильтров
          </div>
          <p className="text-sm">
            Блокчейн-сканеры показывают историю, но не поведение: нет метрик удержания,
            реалистичного PnL и кластеризации «diamond hands».
          </p>
        </li>
        <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
            Риск эмоциональных решений
          </div>
          <p className="text-sm">
            Начинающие инвесторы ориентируются на шум в социальных сетях вместо
            анализа ончейн-данных и стратегий успешных держателей.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Problem;
